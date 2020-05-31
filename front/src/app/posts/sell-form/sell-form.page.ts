import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-sell-form",
  templateUrl: "./sell-form.page.html",
  styleUrls: ["./sell-form.page.scss"],
})
export class SellFormPage implements OnInit {
  public activeTab: number;
  constructor(private router:Router) {}

  ngOnInit() {
    this.activeTab = 2;
  }

  goToShippingForm() {
    if (this.activeTab !== 1) {
      this.router.navigate(["posts/create-shipping"]);
    }
  }
}
