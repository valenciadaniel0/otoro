import { Component, OnInit, ViewChild } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PostService } from "../post.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Storage } from "@ionic/storage";
import {
  ModalController,
  LoadingController,
  AlertController,
} from "@ionic/angular";
import { SelectCityComponent } from "src/app/shared/select-city/select-city.component";
import { CameraSource, Plugins, CameraResultType } from "@capacitor/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "app-shipping-form",
  templateUrl: "./shipping-form.page.html",
  styleUrls: ["./shipping-form.page.scss"],
})
export class ShippingFormPage implements OnInit {
  private activeTab: number;
  private auth: any;
  private destination: any;
  private formData: FormData;
  private imageResponse: any;
  private loading: any;
  private options: any;
  private origin: any;
  private photo1: SafeResourceUrl;
  private photo2: SafeResourceUrl;
  private photo3: SafeResourceUrl;
  private shippingForm: FormGroup;
  private shippingId: string;
  private sub: any;
  private title: string;

  constructor(
    private alertController: AlertController,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer,
    private storage: Storage
  ) {}

  ngOnInit() {
    this.title = "Que quieres publicar?";
    this.sub = this.route.params.subscribe((params) => {
      this.shippingId = params["id"];
      if (this.shippingId !== "0") {
        this.title = "Editar envio";
      }

      this.storage.get("auth").then((auth) => {
        this.auth = auth;
        if (this.shippingId !== "0") {
          this.getPost();
        }
      });
    });

    this.formData = new FormData();
    this.activeTab = 1;

    this.shippingForm = new FormGroup({
      title: new FormControl("title", [Validators.required]),
      description: new FormControl("description", [Validators.required]),
      date: new FormControl("date", [Validators.required]),
      origin: new FormControl("origin", [Validators.required]),
      destination: new FormControl("destination", [Validators.required]),
    });

    this.initializeShippingFormControls();
  }

  initializeShippingFormControls() {
    this.shippingForm.controls["title"].setValue(null);
    this.shippingForm.controls["description"].setValue(null);
    this.shippingForm.controls["date"].setValue(null);
    this.shippingForm.controls["origin"].setValue(null);
    this.shippingForm.controls["destination"].setValue(null);
    this.origin = null;
    this.destination = null;
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
          this.shippingForm.controls["origin"].setValue(this.origin.name);
        } else {
          this.shippingForm.controls["origin"].setValue(null);
        }
      });
    });
  }

  async openDestinationModal() {
    const modal = await this.modalController.create({
      component: SelectCityComponent,
      cssClass: "my-custom-class",
    });

    return await modal.present().then(() => {
      modal.onWillDismiss().then((response: any) => {
        this.destination = response.data.city;
        if (this.destination) {
          this.shippingForm.controls["destination"].setValue(
            this.destination.name
          );
        } else {
          this.shippingForm.controls["destination"].setValue(null);
        }
      });
    });
  }

  getPost() {
    this.postService
      .getById(this.auth, this.shippingId)
      .toPromise()
      .then(
        (res) => {
          const result = res.json();
          this.shippingForm.controls["title"].setValue(result.title);
          this.shippingForm.controls["description"].setValue(
            result.description
          );
          this.shippingForm.controls["date"].setValue(result.date);
          this.shippingForm.controls["origin"].setValue(result.origin.name);
          this.shippingForm.controls["destination"].setValue(
            result.destination.name
          );
          this.origin = result.origin;
          this.destination = result.destination;
        },
        (err) => {
          let error = JSON.parse(err._body);
          console.log(error);
        }
      );
  }

  async saveShipping() {
    let controls = this.shippingForm.controls;
    if (this.shippingForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    let body: any = {
      type: 1,
      title: controls["title"].value,
      description: controls["description"].value,
      date: controls["date"].value,
      origin: this.origin,
      destination: this.destination,
      user: { id: this.auth.id },
    };
    if (this.shippingId !== "0") {
      body = { ...body, id: this.shippingId };
    }

    this.formData.append(
      "postCommand",
      new Blob([JSON.stringify(body)], {
        type: "application/json",
      })
    );

    let action: any = this.postService.save(this.formData, this.auth.token);
    if (body.id) {
      action = this.postService.update(this.formData, this.auth.token);
    }

    this.loading = await this.loadingController.create({
      message: "Cargando...",
    });
    await this.loading.present();
    action.toPromise().then(
      async (res) => {
        this.initializeShippingFormControls();
        await this.loading.dismiss();
        let alert = await this.alertController.create({
          header: "Guardado exitoso",
          message: "Tu publicación se ha guardado correctamente",
          buttons: [
            {
              text: "Aceptar",
              role: "cancel",
              handler: () => {
                return false;
              },
            },
          ],
        });
        alert.present();
      },
      async (err) => {
        await this.loading.dismiss();
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
      this.router.navigate(["posts/create-sell/0"]);
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
