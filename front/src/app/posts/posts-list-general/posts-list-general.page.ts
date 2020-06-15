import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Storage } from "@ionic/storage";
import { PostService } from "../post.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-posts-list-general",
  templateUrl: "./posts-list-general.page.html",
  styleUrls: ["./posts-list-general.page.scss"],
})
export class PostsListGeneralPage implements OnInit {
  private activeTab: number = 1;
  private auth: any;
  private query: string;
  public searchForm: FormGroup;
  private sells: any[] = [];
  private shippings: any[] = [];
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private storage: Storage
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
