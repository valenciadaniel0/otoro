import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PostService } from "../post.service";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-posts-list",
  templateUrl: "./posts-list.page.html",
  styleUrls: ["./posts-list.page.scss"],
})
export class PostsListPage implements OnInit {
  private activeTab: number = 1;
  private auth: any;
  private sells: any[] = [];
  private shippings: any[] = [];
  private sub: any;
  private title: string = "Todas las publicaciones";
  private userId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private storage: Storage
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

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
