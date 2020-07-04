import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  private auth: any;
  private goToMyPosts: () => void;
  private goToAllPosts: () => void;
  private goToTransporters: () => void;
  constructor(private router: Router, private storage: Storage) {}

  ngOnInit() {
    this.storage.get("auth").then((auth) => {
      this.auth = auth;
    });

    this.goToMyPosts = () => {
      this.router.navigate([`posts/list/${this.auth.id}`]);
    };

    this.goToAllPosts = () => {
      this.router.navigate([`posts/posts-list-general`]);
    };

    this.goToTransporters = () => {
      console.log("Transporters");
    };
  }

  goToPostCreation() {
    this.router.navigate(["posts/create-shipping/0"]);
  }
}
