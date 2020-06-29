import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PostService } from "../post.service";
import { Storage } from "@ionic/storage";
import { ModalController, LoadingController } from "@ionic/angular";
import { SelectCityComponent } from "src/app/shared/select-city/select-city.component";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { CameraSource, Plugins, CameraResultType } from "@capacitor/core";

@Component({
  selector: "app-sell-form",
  templateUrl: "./sell-form.page.html",
  styleUrls: ["./sell-form.page.scss"],
})
export class SellFormPage implements OnInit {
  private auth: any;
  private formData: FormData;
  private imageResponse: any;
  private loading: any;
  private options: any;
  private origin: any;
  private photo1: SafeResourceUrl;
  private photo2: SafeResourceUrl;
  private photo3: SafeResourceUrl;
  private sellForm: FormGroup;
  public activeTab: number;
  constructor(
    private router: Router,
    private postService: PostService,
    private storage: Storage,
    private modalController: ModalController,
    private sanitizer: DomSanitizer,
    private loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.formData = new FormData();
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

  async selectPhoto(slide: number) {
    const ab = await this.getPhoto(CameraSource.Photos, slide);
    await this.uploadImage(ab, slide);
  }

  async takePicture(slide: number) {
    const ab = await this.getPhoto(CameraSource.Camera, slide);
    await this.uploadImage(ab, slide);
  }

  private async getPhoto(source: CameraSource, slide: number) {
    const image = await Plugins.Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source,
    });

    let photo = this.sanitizer.bypassSecurityTrustResourceUrl(
      image && image.webPath
    );

    if (slide === 1) {
      this.photo1 = photo;
    } else if (slide === 2) {
      this.photo2 = photo;
    } else {
      this.photo3 = photo;
    }

    return image.webPath;
  }

  private async uploadImage(webPath: string, slide: number) {
    this.loading = await this.loadingController.create({
      message: "Cargando...",
    });
    await this.loading.present();

    const blob = await fetch(webPath).then((r) => r.blob());
    if (slide === 1) {
      this.formData.append("image1", blob, `profile-picture1.jpg`);
    } else if (slide === 2) {
      this.formData.append("image2", blob, `profile-picture2.jpg`);
    } else {
      this.formData.append("image3", blob, `profile-picture3.jpg`);
    }
    await this.loading.dismiss();
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

    this.formData.append(
      "postCommand",
      new Blob([JSON.stringify(body)], {
        type: "application/json",
      })
    );

    this.postService
      .save(this.formData, this.auth.token)
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
