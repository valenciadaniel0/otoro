import { Component, OnInit, Input } from "@angular/core";
import { ModalController, AlertController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";
import { environment } from "../../../environments/environment";
import { ModalImageComponent } from "../modal-image/modal-image.component";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.scss"],
})
export class PostDetailsComponent implements OnInit {
  @Input() post: any;
  private auth: any;
  private image1: string = `${environment.default_post_img}`;
  private image2: string = "";
  private image3: string = "";
  constructor(
    private modalController: ModalController,
    private storage: Storage,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.storage.get("auth").then((auth) => {
      this.auth = auth;
    });

    if (this.post.image1) {
      this.image1 = `${environment.posts_pictures_url}${this.post.image1}.jpg`;
    }
    if (this.post.image2) {
      this.image2 = `${environment.posts_pictures_url}${this.post.image2}.jpg`;
    }
    if (this.post.image3) {
      this.image3 = `${environment.posts_pictures_url}${this.post.image3}.jpg`;
    }
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  async openImageModal(imageNumber: number) {
    let image: string = "";
    image =
      imageNumber === 1
        ? this.image1
        : imageNumber === 2
        ? this.image2
        : this.image3;

    const modal = await this.modalController.create({
      component: ModalImageComponent,
      componentProps: {
        url: image,
      },
      cssClass: "my-custom-class",
    });

    return await modal.present().then(() => {});
  }

  async confirmDeletion() {
    let alert = await this.alertController.create({
      header: "Eliminar publicación",
      message: "Estás seguro de eliminar esta publicación?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            return false;
          },
        },
        {
          text: "Eliminar",
          handler: () => {
            this.modalController.dismiss({
              dismissed: true,
              postId: this.post.id,
              delete: true,
            });
          },
        },
      ],
    });
    alert.present();
  }

  goToEdit() {
    this.modalController.dismiss({
      dismissed: true,
      postId: this.post.id,
      postType: this.post.type,
    });
  }
}
