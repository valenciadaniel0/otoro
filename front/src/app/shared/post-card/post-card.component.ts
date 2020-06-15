import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-post-card",
  templateUrl: "./post-card.component.html",
  styleUrls: ["./post-card.component.scss"],
})
export class PostCardComponent implements OnInit {
  @Input() date: string;
  @Input() imageSrc: string;
  @Input() price: number;
  @Input() title: string;
  @Input() type: number;
  constructor() {}

  ngOnInit() {}
}
