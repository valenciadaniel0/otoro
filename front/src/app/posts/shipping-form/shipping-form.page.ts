import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PostService } from "../post.service";
import { Router } from "@angular/router";
import { ImagePicker } from '@ionic-native/image-picker/ngx';

@Component({
  selector: "app-shipping-form",
  templateUrl: "./shipping-form.page.html",
  styleUrls: ["./shipping-form.page.scss"],
})
export class ShippingFormPage implements OnInit {
  public shippingForm: FormGroup;
  public activeTab: number;
  imageResponse: any;
  options: any;
  constructor(private postService: PostService, private router: Router,private imagePicker: ImagePicker) {    
  }

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
          //const result = res.json();
          console.log(res);
        },
        (err) => {
          let error = JSON.parse(err._body);
          console.log(error);
        }
      );
  }  

  getImages() {
    this.options = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      //maximumImagesCount: 3,

      // max width and height to allow the images to be.  Will keep aspect
      // ratio no matter what.  So if both are 800, the returned image
      // will be at most 800 pixels wide and 800 pixels tall.  If the width is
      // 800 and height 0 the image will be 800 pixels wide if the source
      // is at least that wide.
      width: 200,
      //height: 200,

      // quality of resized image, defaults to 100
      quality: 25,

      // output type, defaults to FILE_URIs.
      // available options are 
      // window.imagePicker.OutputType.FILE_URI (0) or 
      // window.imagePicker.OutputType.BASE64_STRING (1)
      outputType: 1
    };
    this.imageResponse = [];
    this.imagePicker.getPictures(this.options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this.imageResponse.push('data:image/jpeg;base64,' + results[i]);
      }
    }, (err) => {
      alert(err);
    });
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
