import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { PostService } from "../post.service";
import { Storage } from "@ionic/storage";
import { PostDetailsComponent } from "src/app/shared/post-details/post-details.component";
import { CommentsComponent } from "src/app/shared/comments/comments.component";
import { ModalController, LoadingController } from "@ionic/angular";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.page.html",
  styleUrls: ["./posts-list.page.scss"],
})
export class PostsListPage implements OnInit {
  private openCommentsModal: (postId: number) => void;
  private openDetailsModal: (post: any) => void;

  private activeTab: number = 1;
  private auth: any;
  private loading: any;
  private sells: any[] = [];
  private shippings: any[] = [];
  private sub: any;
  private title: string = "Todas las publicaciones";
  private userId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private storage: Storage,
    private modalController: ModalController,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  async ngOnInit() {
    this.sub = this.route.params.subscribe((params) => {
      this.userId = params["user-id"];
      if (this.userId !== 0) {
        this.title = "Aquí esta lo que has publicado";
      }

      this.storage.get("auth").then((auth) => {
        this.auth = auth;
        this.getShippings();
      });
    });

    this.openCommentsModal = (postId: number) => {
      this.openCommentsModalImplementation(postId);
    };

    this.openDetailsModal = (post: any) => {
      this.openDetailsModalImplementation(post);
    };
  }

  async openCommentsModalImplementation(postId: number) {
    const modal = await this.modalController.create({
      component: CommentsComponent,
      componentProps: {
        postId: postId,
      },
      cssClass: "my-custom-class",
    });

    return await modal.present().then(() => {});
  }

  async openDetailsModalImplementation(post: any) {
    const modal = await this.modalController.create({
      component: PostDetailsComponent,
      componentProps: {
        post: post,
      },
      cssClass: "my-custom-class",
    });

    return await modal.present().then(() => {
      modal.onWillDismiss().then((response: any) => {
        let postId = response.data.postId;
        let postType = response.data.postType;
        let deletePost = response.data.delete;
        if (postId && postType) {
          if (postType === 1) {
            this.router.navigate([`posts/create-shipping/${postId}`]);
          } else {
            this.router.navigate([`posts/create-sell/${postId}`]);
          }
        } else if (postId && deletePost) {
          this.deletePost(postId);
        }
      });
    });
  }

  async deletePost(postId: number) {
    this.loading = await this.loadingController.create({
      message: "Cargando...",
    });
    await this.loading.present();
    this.postService
      .delete(postId, this.auth.token)
      .toPromise()
      .then(
        async (res) => {
          await this.loading.dismiss();
          if (this.activeTab === 1) {
            this.getShippings();
          } else {
            this.getSells();
          }
        },
        async (err) => {
          await this.loading.dismiss();
          let error = JSON.parse(err._body);
          console.log(error);
        }
      );
  }

  changeActiveTab(tabNumber: number) {
    this.activeTab = tabNumber;
    if (this.activeTab === 1) {
      this.getShippings();
    } else {
      this.getSells();
    }
  }

  getShippings() {
    this.postService
      .getByType(this.auth, 1)
      .toPromise()
      .then(
        (res) => {
          const result = res.json();
          this.shippings = result;
        },
        (err) => {
          let error = JSON.parse(err._body);
          console.log(error);
        }
      );
  }

  getSells() {
    this.postService
      .getByType(this.auth, 2)
      .toPromise()
      .then(
        (res) => {
          const result = res.json();
          this.sells = result;
        },
        (err) => {
          let error = JSON.parse(err._body);
          console.log(error);
        }
      );
  }

  goToPostCreation() {
    this.router.navigate(["posts/create-shipping/0"]);
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
