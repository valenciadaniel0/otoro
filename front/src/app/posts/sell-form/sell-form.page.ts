import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PostService } from "../post.service";
import { Storage } from "@ionic/storage";
import {
  ModalController,
  LoadingController,
  AlertController,
} from "@ionic/angular";
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
  private sellId: string;
  private subscription: any;
  private title: string;
  public activeTab: number;
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
    this.subscription = this.route.params.subscribe((params) => {
      this.sellId = params["id"];
      if (this.sellId !== "0") {
        this.title = "Editar venta";
      }

      this.storage.get("auth").then((auth) => {
        this.auth = auth;
        if (this.sellId !== "0") {
          this.getPost();
        }
      });
    });

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

    this.initializeSellFormControls();
  }

  initializeSellFormControls() {
    this.sellForm.controls["title"].setValue(null);
    this.sellForm.controls["description"].setValue(null);
    this.sellForm.controls["price"].setValue(null);
    this.sellForm.controls["origin"].setValue(null);
    this.origin = null;
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

  getPost() {
    this.postService
      .getById(this.auth, this.sellId)
      .toPromise()
      .then(
        (res) => {
          const result = res.json();
          this.sellForm.controls["title"].setValue(result.title);
          this.sellForm.controls["description"].setValue(result.description);
          this.sellForm.controls["price"].setValue(result.price);
          this.sellForm.controls["origin"].setValue(result.origin.name);
          this.origin = result.origin;
        },
        (err) => {
          let error = JSON.parse(err._body);
          console.log(error);
        }
      );
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

  async saveSell() {
    let controls = this.sellForm.controls;
    if (this.sellForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      return;
    }

    let body: any = {
      type: 2,
      image: "",
      title: controls["title"].value,
      description: controls["description"].value,
      price: controls["price"].value,
      origin: this.origin,
      user: { id: this.auth.id },
    };

    if (this.sellId !== "0") {
      body = { ...body, id: this.sellId };
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
        this.initializeSellFormControls();
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

  goToShippingForm() {
    if (this.activeTab !== 1) {
      this.router.navigate(["posts/create-shipping/0"]);
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

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
