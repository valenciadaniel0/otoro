import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {
  private goToMyPosts: () => void;
  private goToAllPosts: () => void;
  private goToTransporters: () => void;
  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    this.goToMyPosts = () => {
      console.log("My posts");
    };

    this.goToAllPosts = () => {
      console.log("All posts");
    };

    this.goToTransporters = () => {
      console.log("Transporters");
    };
  }

  goToPostCreation() {
    this.router.navigate(["posts/create-shipping"]);
  }
}
