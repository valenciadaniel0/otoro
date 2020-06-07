import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { RestService } from "../../core/services/rest.service";
import { LoginService } from "./login.service";

@Component({
  selector: "app-form",
  templateUrl: "./form.page.html",
  styleUrls: ["./form.page.scss"],
})
export class FormPage implements OnInit {
  public myForm: FormGroup;
  public imageUrl: string;
  public imageId: string;
  constructor(private loginService: LoginService, private router: Router) {}

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
        (res) => {          
          //const result = res.json();
          this.router.navigate(["/dashboard"]);
        },
        (err) => { 
          console.log(err);         
          let error = JSON.parse(err._body);
          console.log(error);
        }
      );
  }
}
