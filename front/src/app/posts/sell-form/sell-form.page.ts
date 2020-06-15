import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PostService } from "../post.service";
import { Storage } from "@ionic/storage";
import { ImagePicker } from "@ionic-native/image-picker/ngx";
import { ModalController } from "@ionic/angular";
import { SelectCityComponent } from "src/app/shared/select-city/select-city.component";

@Component({
  selector: "app-sell-form",
  templateUrl: "./sell-form.page.html",
  styleUrls: ["./sell-form.page.scss"],
})
export class SellFormPage implements OnInit {
  public activeTab: number;
  private auth: any;
  private imageResponse: any;
  private options: any;
  private origin: any;
  private sellForm: FormGroup;
  constructor(
    private router: Router,
    private postService: PostService,
    private imagePicker: ImagePicker,
    private storage: Storage,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.activeTab = 2;
    this.storage.get("auth").then((auth) => {
      this.auth = auth;
    });

    this.sellForm = new FormGroup({
      title: new FormControl("title", [Validators.required]),
      description: new FormControl("description", [Validators.required]),
      price: new FormControl("price", [Validators.required]),
      origin: new FormControl("origin", [Validators.required]),
    });

    this.sellForm.controls["title"].setValue(null);
    this.sellForm.controls["description"].setValue(null);
    this.sellForm.controls["price"].setValue(null);
    this.sellForm.controls["origin"].setValue(null);
  }

  async openOriginModal() {
    const modal = await this.modalController.create({
      component: SelectCityComponent,
      cssClass: "my-custom-class",
    });

    return await modal.present().then(() => {
      modal.onWillDismiss().then((response: any) => {
        this.origin = response.data.city;
        if (this.origin) {
          this.sellForm.controls["origin"].setValue(this.origin.name);
        } else {
          this.sellForm.controls["origin"].setValue(null);
        }
      });
    });
  }

  saveSell() {
    let controls = this.sellForm.controls;
    if (this.sellForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    const body = {
      type: 2,
      image: "",
      title: controls["title"].value,
      description: controls["description"].value,
      price: controls["price"].value,
      origin: this.origin,
      user: { id: this.auth.id },
    };

    this.postService
      .save(body, this.auth.token)
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
      outputType: 1,
    };
    this.imageResponse = [];
    this.imagePicker.getPictures(this.options).then(
      (results) => {
        for (var i = 0; i < results.length; i++) {
          this.imageResponse.push("data:image/jpeg;base64," + results[i]);
        }
      },
      (err) => {
        alert(err);
      }
    );
  }

  goBackToDashboard() {
    this.router.navigate(["/dashboard"]);
  }

  goToShippingForm() {
    if (this.activeTab !== 1) {
      this.router.navigate(["posts/create-shipping"]);
    }
  }

  public controlHasError(controlName: string, validationType: string): boolean {
    const control = this.sellForm.controls[controlName];
    if (!control) {
      return false;
    }

    const result =
      control.hasError(validationType) && (control.dirty || control.touched);

    return result;
  }
}
