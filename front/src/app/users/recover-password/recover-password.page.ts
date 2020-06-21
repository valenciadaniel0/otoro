import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';

@Component({
  selector: "app-recover-password",
  templateUrl: "./recover-password.page.html",
  styleUrls: ["./recover-password.page.scss"],
})
export class RecoverPasswordPage implements OnInit {
  public myForm: FormGroup;
  public imageUrl: string;
  public imageId: string;
  constructor(private router: Router,public storage: Storage,
    private usersService: UsersService) {}

  ngOnInit() {
    this.imageUrl = "../../assets/logo/otoro-logo.png";
    this.imageId = "top-image";
    this.myForm = new FormGroup({
      email: new FormControl("email", [Validators.required]),      
    });
    this.myForm.controls["email"].setValue(null);
  }

  cancel() {
    this.router.navigate(["/login"]);
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
