import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PostService } from "../post.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-shipping-form",
  templateUrl: "./shipping-form.page.html",
  styleUrls: ["./shipping-form.page.scss"],
})
export class ShippingFormPage implements OnInit {
  public shippingForm: FormGroup;  
  public activeTab:number;
  constructor(private postService: PostService, private router: Router) {}

  ngOnInit() {    
    this.activeTab = 1;

    this.shippingForm = new FormGroup({
      title: new FormControl("title", [Validators.required]),
      description: new FormControl("description", [Validators.required]),
      date: new FormControl("date", [Validators.required]),
    });

    this.shippingForm.controls["title"].setValue(null);
    this.shippingForm.controls["description"].setValue(null);
    this.shippingForm.controls["date"].setValue(null);
  }

  saveShipping() {
    let controls = this.shippingForm.controls;
    if (this.shippingForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    const body = {
      title: controls["title"].value,
      description: controls["description"].value,
      date: controls["date"].value,
    };

    this.postService
      .save(body)
      .toPromise()
      .then(
        (res) => {
          const result = res.json();
          console.log(result);
        },
        (err) => {
          let error = JSON.parse(err._body);
          console.log(error);
        }
      );
  }

  goBackToDashboard() {
    this.router.navigate(["/dashboard"]);
  }

  goToSellForm() {
    if (this.activeTab !== 2) {
      this.router.navigate(["posts/create-sell"]);
    }
  }

  public controlHasError(controlName: string, validationType: string): boolean {
    const control = this.shippingForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) && (control.dirty || control.touched);

    return result;
  }
}
