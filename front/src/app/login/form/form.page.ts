import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { LoginService } from "./login.service";
import { UsersService } from "src/app/users/users.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.page.html",
  styleUrls: ["./form.page.scss"],
})
export class FormPage implements OnInit {
  public myForm: FormGroup;
  public imageUrl: string;
  public imageId: string;
  constructor(
    private loginService: LoginService,
    private router: Router,
    public storage: Storage,
    private usersService: UsersService
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

  public controlHasError(controlName: string, validationType: string): boolean {
    const control = this.myForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) && (control.dirty || control.touched);

    return result;
  }

  login() {
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
          };
          this.updateUser(user, result.token);
        },
        (err) => {
          console.log(err);
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
          console.log(err);
          let error = JSON.parse(err._body);
          console.log(error);
        }
      );
  }

  goToRecoverPassword() {
    this.router.navigate(["/users/recover-password"]);
  }
}
