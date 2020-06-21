import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { UsersService } from "../users.service";
import { LoginService } from "src/app/login/form/login.service";

@Component({
  selector: "app-recover-password",
  templateUrl: "./recover-password.page.html",
  styleUrls: ["./recover-password.page.scss"],
})
export class RecoverPasswordPage implements OnInit {
  public userEmail: string;
  public imageId: string;
  public imageUrl: string;
  public myCodeForm: FormGroup;
  public myForm: FormGroup;
  public showCodeForm: boolean;
  constructor(
    private router: Router,
    public storage: Storage,
    private usersService: UsersService,
    private loginService: LoginService
  ) {}

  ngOnInit() {
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

  updateRecoverCode() {
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

    this.usersService
      .updateRecoverCode(body)
      .toPromise()
      .then(
        async (res) => {
          this.showCodeForm = true;
        },
        (err) => {
          let error = JSON.parse(err._body);
          console.log(error);
        }
      );
  }

  recoverPassword() {
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

    this.usersService
      .recoverPassword(body)
      .toPromise()
      .then(
        async (res) => {
          this.login();
        },
        (err) => {
          let error = JSON.parse(err._body);
          console.log(error);
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
            active: result.active,
            deviceToken: deviceToken,
            email: result.email,
            id: result.id,
            name: result.name,
            roles: result.roles,
          };
          this.updateUser(user, result.token);
        },
        (err) => {
          let error = JSON.parse(err._body);
          console.log(error);
        }
      );
  }

  updateUser(body: any, token: string) {
    this.usersService
      .update(body, token)
      .toPromise()
      .then(
        async (res) => {
          this.router.navigate(["/dashboard"]);
        },
        (err) => {
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