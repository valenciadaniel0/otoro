import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import {
  ModalController,
  LoadingController,
  MenuController,
} from "@ionic/angular";
import {
  Plugins,
  CameraResultType,
  CameraSource,
  Camera,
} from "@capacitor/core";
import { SelectCityComponent } from "src/app/shared/select-city/select-city.component";
import { UsersService } from "../users.service";
import { LoginService } from "src/app/login/form/login.service";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-register-form",
  templateUrl: "./register-form.page.html",
  styleUrls: ["./register-form.page.scss"],
})
export class RegisterFormPage implements OnInit {
  private city: any;
  private formData: FormData;
  private imageResponse: any;
  private loading: any;
  private myForm: FormGroup;
  private options: any;
  private photo: SafeResourceUrl;
  private step: number = 1;
  private uploadImage: (webPatth: string) => void;
  constructor(
    private router: Router,
    private storage: Storage,
    private modalController: ModalController,
    private usersService: UsersService,
    private loginService: LoginService,
    private sanitizer: DomSanitizer,
    private loadingController: LoadingController,
    private menuController: MenuController
  ) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl("name", [Validators.required]),
      city: new FormControl("city", [Validators.required]),
      email: new FormControl("email", [Validators.required]),
      password: new FormControl("password", [Validators.required]),
      confirmPassword: new FormControl("confirmPassword", [
        Validators.required,
      ]),
      phone: new FormControl("phone", []),
      serviceDescription: new FormControl("serviceDescription", []),
    });

    this.myForm.controls["name"].setValue(null);
    this.myForm.controls["city"].setValue(null);
    this.myForm.controls["phone"].setValue(null);
    this.myForm.controls["serviceDescription"].setValue(null);
    this.myForm.controls["email"].setValue(null);
    this.myForm.controls["password"].setValue(null);
    this.myForm.controls["confirmPassword"].setValue(null);

    this.formData = new FormData();

    this.uploadImage = (webPath: string) => {
      this.uploadImageImplementation(webPath);
    };
  }

  async selectPhoto() {
    const ab = await this.getPhoto(CameraSource.Photos);
    await this.uploadImage(ab);
  }

  async takePicture() {
    const ab = await this.getPhoto(CameraSource.Camera);
    await this.uploadImage(ab);
  }

  private async getPhoto(source: CameraSource) {
    const image = await Plugins.Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source,
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(
      image && image.webPath
    );
    return image.webPath;
  }

  private async uploadImageImplementation(webPath: string) {
    this.loading = await this.loadingController.create({
      message: "Cargando...",
    });
    await this.loading.present();

    const blob = await fetch(webPath).then((r) => r.blob());
    this.formData.append("image", blob, `profile-picture.jpg`);
    await this.loading.dismiss("login");
  }

  continueToSecondStep() {
    this.step = 2;
  }

  goBackToFirstStep() {
    this.step = 1;
  }

  cancel() {
    this.step = 1;
    this.myForm.controls["name"].setValue(null);
    this.myForm.controls["city"].setValue(null);
    this.myForm.controls["phone"].setValue(null);
    this.myForm.controls["serviceDescription"].setValue(null);
    this.myForm.controls["email"].setValue(null);
    this.myForm.controls["password"].setValue(null);
    this.myForm.controls["confirmPassword"].setValue(null);
    this.router.navigate(["/login"]);
  }

  async register() {
    this.loading = await this.loadingController.create({
      message: "Cargando...",
    });
    let controls = this.myForm.controls;
    if (this.myForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    const body = {
      active: 1,
      email: controls["email"].value,
      name: controls["name"].value,
      phone: controls["phone"].value,
      serviceDescription: controls["serviceDescription"].value,
      password: controls["password"].value,
      username: controls["email"].value,
      city: this.city,
      roles: [{ id: 2 }],
    };
    this.formData.append(
      "userCommand",
      new Blob([JSON.stringify(body)], {
        type: "application/json",
      })
    );
    this.loading.present();
    this.usersService
      .register(this.formData)
      .toPromise()
      .then(
        async (res) => {
          this.login();
        },
        (err) => {
          this.loading.dismiss();
          let error = JSON.parse(err._body);
        }
      );
  }

  login() {
    let controls = this.myForm.controls;

    const body = {
      email: controls["email"].value,
      password: controls["password"].value,
    };

    this.loginService
      .run(body)
      .toPromise()
      .then(
        async (res) => {
          let result = res.json();
          let deviceToken = await this.storage.get("deviceToken");
          this.storage.set("auth", result);
          let user = {
            active: result.active,
            deviceToken: deviceToken,
            email: result.email,
            id: result.id,
            profilePicture: result.profilePicture,
            name: result.name,
            serviceDescription: result.serviceDescription,
            phone: result.phone,
            roles: result.roles,
            city: result.city,
          };

          this.formData.set(
            "userCommand",
            new Blob([JSON.stringify(user)], {
              type: "application/json",
            })
          );
          this.updateUser(result.token);
        },
        (err) => {
          this.loading.dismiss();
          let error = JSON.parse(err._body);
          console.log(error);
        }
      );
  }

  updateUser(token: string) {
    this.usersService
      .update(this.formData, token)
      .toPromise()
      .then(
        async (res) => {
          this.menuController.enable(true);
          this.loading.dismiss();
          this.router.navigate(["/dashboard"]);
        },
        (err) => {
          this.loading.dismiss();
          let error = JSON.parse(err._body);
          console.log(error);
        }
      );
  }

  async openCityModal() {
    const modal = await this.modalController.create({
      component: SelectCityComponent,
      cssClass: "my-custom-class",
    });

    return await modal.present().then(() => {
      modal.onWillDismiss().then((response: any) => {
        this.city = response.data.city;
        if (this.city) {
          this.myForm.controls["city"].setValue(this.city.name);
        } else {
          this.myForm.controls["city"].setValue(null);
        }
      });
    });
  }

  public controlHasError(controlName: string, validationType: string): boolean {
    const control = this.myForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) && (control.dirty || control.touched);

    return result;
  }
}
