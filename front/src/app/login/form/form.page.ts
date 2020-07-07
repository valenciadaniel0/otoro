import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { LoginService } from "./login.service";
import { UsersService } from "src/app/users/users.service";
import { MenuController, LoadingController } from "@ionic/angular";

@Component({
  selector: "app-form",
  templateUrl: "./form.page.html",
  styleUrls: ["./form.page.scss"],
})
export class FormPage implements OnInit {
  private loading: any;
  public imageId: string;
  public imageUrl: string;
  public myForm: FormGroup;
  constructor(
    private loginService: LoginService,
    private router: Router,
    public storage: Storage,
    private usersService: UsersService,
    private menuController: MenuController,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.imageUrl = "../../assets/logo/otoro-logo.png";
    this.imageId = "top-image";
    this.myForm = new FormGroup({
      email: new FormControl("email", [Validators.required]),
      password: new FormControl("password", [Validators.required]),
    });

    this.myForm.controls["email"].setValue(null);
    this.myForm.controls["password"].setValue(null);
  }

  ionViewWillEnter() {
    this.menuController.enable(false);
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

  async login() {
    let controls = this.myForm.controls;
    if (this.myForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    const body = {
      email: controls["email"].value,
      password: controls["password"].value,
    };

    this.loading = await this.loadingController.create({
      message: "Cargando...",
    });

    await this.loading.present();

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
            name: result.name,
            roles: result.roles,
            city: result.city,
            phone: result.phone,
            serviceDescription: result.serviceDescription,
            profilePicture: result.profilePicture,
          };
          this.updateUser(user, result.token);
        },
        async (err) => {
          console.log(err);
          let error = JSON.parse(err._body);
          console.log(error);
          await this.loading.dismiss();
        }
      );
  }

  updateUser(body: any, token: string) {
    this.usersService
      .update(body, token)
      .toPromise()
      .then(
        async (res) => {
          this.menuController.enable(true);
          await this.loading.dismiss();
          this.router.navigate(["/dashboard"]);
        },
        async (err) => {
          console.log(err);
          let error = JSON.parse(err._body);
          console.log(error);
          await this.loading.dismiss();
        }
      );
  }

  goToRecoverPassword() {
    this.router.navigate(["/users/recover-password"]);
  }

  goToRegistration() {
    this.router.navigate(["/users/register"]);
  }
}
