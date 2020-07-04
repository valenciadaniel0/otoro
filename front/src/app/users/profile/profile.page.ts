import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { ModalController, LoadingController } from "@ionic/angular";
import { UsersService } from "../users.service";
import { CameraSource, Plugins, CameraResultType } from "@capacitor/core";
import { SelectCityComponent } from "src/app/shared/select-city/select-city.component";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  private auth: any;
  private city: any;
  private formData: FormData;
  private imageResponse: any;
  private loading: any;
  private myForm: FormGroup;
  private photo: SafeResourceUrl;
  private uploadImage: (webPatth: string) => void;
  constructor(
    private router: Router,
    private storage: Storage,
    private modalController: ModalController,
    private usersService: UsersService,
    private sanitizer: DomSanitizer,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl("name", [Validators.required]),
      city: new FormControl("city", [Validators.required]),
      email: new FormControl("email", [Validators.required]),
      password: new FormControl("password", []),
      confirmPassword: new FormControl("confirmPassword", []),
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

    this.storage.get("auth").then((auth) => {
      this.auth = auth;
      this.myForm.controls["name"].setValue(auth.name);
      this.myForm.controls["city"].setValue(auth.city.name);
      this.city = auth.city;
      this.myForm.controls["phone"].setValue(auth.phone);
      this.myForm.controls["serviceDescription"].setValue(
        auth.serviceDescription
      );
      this.myForm.controls["email"].setValue(auth.email);
    });

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

  updateUser() {
    let controls = this.myForm.controls;
    if (this.myForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    let body = {
      id: this.auth.id,
      active: 1,
      deviceToken: this.auth.deviceToken,
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
    this.usersService
      .update(body, this.auth.token)
      .toPromise()
      .then(
        async (res) => {
          console.log("guardado!");
          let newAuth = { ...body, token: this.auth.token };
          this.storage.set("auth", newAuth);
        },
        (err) => {
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
