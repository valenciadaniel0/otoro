import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Storage } from "@ionic/storage";
import { PostService } from "../post.service";
import { FormGroup, FormControl } from "@angular/forms";
import { ModalController } from "@ionic/angular";
import { CommentsComponent } from "src/app/shared/comments/comments.component";
import { PostDetailsComponent } from 'src/app/shared/post-details/post-details.component';

@Component({
  selector: "app-posts-list-general",
  templateUrl: "./posts-list-general.page.html",
  styleUrls: ["./posts-list-general.page.scss"],
})
export class PostsListGeneralPage implements OnInit {
  private activeTab: number = 1;
  private auth: any;
  private openCommentsModal: (postId: number) => void;
  private openDetailsModal: (post: any) => void;
  private query: string;
  private sells: any[] = [];
  private shippings: any[] = [];
  private sub: any;
  public searchForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private storage: Storage,
    private modalController: ModalController
  ) {}

  ngOnInit() {
    this.storage.get("auth").then((auth) => {
      this.auth = auth;
      this.getShippings();
    });

    this.searchForm = new FormGroup({
      queryControl: new FormControl("queryControl", []),
    });
    this.searchForm.controls["queryControl"].setValue(null);

    this.openCommentsModal = (postId: number) => {
      this.openCommentsModalImplementation(postId);
    };

    this.openDetailsModal = (post:any)=>{
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

    return await modal.present().then(() => {      
    });
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
    });
  }

  changeActiveTab(tabNumber: number) {
    this.activeTab = tabNumber;
    if (this.activeTab === 1) {
      this.getShippings();
    } else {
      this.getSells();
    }
  }

  search() {
    let controls = this.searchForm.controls;
    this.query = controls["queryControl"].value;
    if (this.query && this.query.length > 3) {
      if (this.activeTab === 1) {
        this.getShippings();
        this.sells = [];
      } else {
        this.getSells();
        this.shippings = [];
      }
    } else {
      this.shippings = [];
      this.sells = [];
      if (this.activeTab == 1 && this.query == "") {
        this.getShippings();
      } else if (this.query == "") {
        this.getSells();
      }
    }
  }

  getShippings() {
    this.postService
      .search(this.auth, this.query, 1)
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
      .search(this.auth, this.query, 2)
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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
