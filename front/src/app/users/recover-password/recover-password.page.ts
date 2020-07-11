import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsersService } from "../users.service";
import { LoginService } from "src/app/login/form/login.service";
import { LoadingController } from "@ionic/angular";

@Component({
  selector: "app-recover-password",
  templateUrl: "./recover-password.page.html",
  styleUrls: ["./recover-password.page.scss"],
})
export class RecoverPasswordPage implements OnInit {
  private loading: any;
  private formData: FormData;
  public imageId: string;
  public imageUrl: string;
  public myCodeForm: FormGroup;
  public myForm: FormGroup;
  public showCodeForm: boolean;
  public userEmail: string;
  constructor(
    private router: Router,
    public storage: Storage,
    private usersService: UsersService,
    private loginService: LoginService,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.formData = new FormData();
    this.showCodeForm = false;
    this.imageUrl = "../../assets/logo/otoro-logo.png";
    this.imageId = "top-image";
    this.myForm = new FormGroup({
      email: new FormControl("email", [Validators.required]),
    });
    this.myForm.controls["email"].setValue(null);
    this.myCodeForm = new FormGroup({
      code: new FormControl("code", [Validators.required]),
    });
    this.myCodeForm.controls["code"].setValue(null);
  }

  cancel() {
    this.showCodeForm = false;
    this.router.navigate(["/login"]);
  }

  async updateRecoverCode() {
    let controls = this.myForm.controls;
    if (this.myForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    const body = {
      email: controls["email"].value,
    };

    this.userEmail = controls["email"].value;

    this.loading = await this.loadingController.create({
      message: "Cargando...",
    });
    await this.loading.present();
    this.usersService
      .updateRecoverCode(body)
      .toPromise()
      .then(
        async (res) => {
          this.showCodeForm = true;
          await this.loading.dismiss();
        },
        async (err) => {
          let error = JSON.parse(err._body);
          console.log(error);
          await this.loading.dismiss();
        }
      );
  }

  async recoverPassword() {
    let controls = this.myCodeForm.controls;
    if (this.myCodeForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    const body = {
      email: this.userEmail,
      recoverCode: controls["code"].value,
    };

    this.loading = await this.loadingController.create({
      message: "Cargando...",
    });
    await this.loading.present();

    this.usersService
      .recoverPassword(body)
      .toPromise()
      .then(
        async (res) => {
          this.login();
        },
        async (err) => {
          let error = JSON.parse(err._body);
          console.log(error);
          await this.loading.dismiss();
        }
      );
  }

  login() {
    let controls = this.myCodeForm.controls;

    const body = {
      email: this.userEmail,
      password: controls["code"].value,
    };

    this.loginService
      .run(body)
      .toPromise()
      .then(
        async (res) => {
          this.showCodeForm = false;
          this.myForm.controls["email"].setValue(null);
          this.myCodeForm.controls["code"].setValue(null);

          let result = res.json();
          let deviceToken = await this.storage.get("deviceToken");
          this.storage.set("auth", result);
          let user = {
            id: result.id,
            deviceToken: deviceToken,
            active: result.active,
            email: result.email,
            name: result.name,
            phone: result.phone,
            profilePicture: result.profilePicture,
            serviceDescription: result.serviceDescription,
            password: "",
            username: result.email,
            city: result.city,
            roles: result.roles,
          };
          this.formData.append(
            "userCommand",
            new Blob([JSON.stringify(user)], {
              type: "application/json",
            })
          );
          this.updateUser(result.token);
        },
        async (err) => {
          let error = JSON.parse(err._body);
          console.log(error);
          await this.loading.dismiss();
        }
      );
  }

  updateUser(token: string) {
    this.usersService
      .update(this.formData, token)
      .toPromise()
      .then(
        async (res) => {
          await this.loading.dismiss();
          this.router.navigate(["/dashboard"]);
        },
        async (err) => {
          await this.loading.dismiss();
          let error = JSON.parse(err._body);
          console.log(error);
        }
      );
  }

  public controlHasError(controlName: string, validationType: string): boolean {
    let control = this.myForm.controls[controlName];
    if (this.showCodeForm) {
      control = this.myCodeForm.controls[controlName];
    }
    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) && (control.dirty || control.touched);

    return result;
  }
}
