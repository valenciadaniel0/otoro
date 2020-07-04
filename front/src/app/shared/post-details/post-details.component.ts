import { Component, OnInit, Input } from "@angular/core";
import { ModalController, AlertController } from "@ionic/angular";
import { Storage } from "@ionic/storage";
import { Router } from "@angular/router";

@Component({
  selector: "app-post-details",
  templateUrl: "./post-details.component.html",
  styleUrls: ["./post-details.component.scss"],
})
export class PostDetailsComponent implements OnInit {
  @Input() post: any;
  private auth: any;
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
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
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
