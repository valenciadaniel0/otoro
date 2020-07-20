import { Component, OnInit, Input } from "@angular/core";
import {
  ModalController,
  LoadingController,
  AlertController,
} from "@ionic/angular";
import { CommentService } from "./comment.service";
import { Storage } from "@ionic/storage";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.scss"],
})
export class CommentsComponent implements OnInit {
  @Input() postId: number;
  private activeButton: boolean;
  private auth: any;
  private comments: any[] = [];
  public commentForm: FormGroup;
  private loading: any;
  constructor(
    private modalController: ModalController,
    private commentService: CommentService,
    private storage: Storage,
    private loadingController: LoadingController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activeButton = true;

    this.storage.get("auth").then((auth) => {
      this.auth = auth;
      this.getComments();
    });

    this.commentForm = new FormGroup({
      comment: new FormControl("comment", []),
    });
    this.commentForm.controls["comment"].setValue(null);

    this.commentForm.get("comment").valueChanges.subscribe((val) => {
      this.activeButton = val !== null && val !== "" ? false : true;
    });
  }

  getComments() {
    this.commentService
      .getByType(this.postId, this.auth.token)
      .toPromise()
      .then(
        (res) => {
          const result = res.json();
          this.comments = result;
        },
        (err) => {
          let error = JSON.parse(err._body);
          console.log(error);
        }
      );
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  async saveComment() {
    this.loading = await this.loadingController.create({
      message: "Cargando...",
    });
    await this.loading.present();
    let controls = this.commentForm.controls;
    if (this.commentForm.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );
      await this.loading.dismiss();
      return;
    }

    const body = {
      comment: controls["comment"].value,
      post: { id: this.postId },
      user: { id: this.auth.id },
    };

    this.commentService
      .save(body, this.auth.token)
      .toPromise()
      .then(
        async (res) => {
          await this.loading.dismiss();
          this.commentForm.controls["comment"].setValue(null);
          this.getComments();
        },
        async (err) => {
          await this.loading.dismiss();
          let error = JSON.parse(err._body);
          console.log(error);
        }
      );
  }

  async confirmDeletion(commentId: number) {
    let alert = await this.alertController.create({
      header: "Eliminar comentario",
      message: "Estás seguro de eliminar este comentario?",
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
            this.deleteComment(commentId);
          },
        },
      ],
    });
    alert.present();
  }

  async deleteComment(commentId: number) {
    this.loading = await this.loadingController.create({
      message: "Cargando...",
    });
    await this.loading.present();
    this.commentService
      .delete(commentId, this.auth.token)
      .toPromise()
      .then(
        async (res) => {
          await this.loading.dismiss();
          this.getComments();
        },
        async (err) => {
          await this.loading.dismiss();
          let error = JSON.parse(err._body);
          console.log(error);
        }
      );
  }
}
