import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-post-card",
  templateUrl: "./post-card.component.html",
  styleUrls: ["./post-card.component.scss"],
})
export class PostCardComponent implements OnInit {
  @Input() date: string;
  @Input() description: string;
  @Input() destination: any;
  @Input() id: number;
  @Input() imageSrc: string;
  @Input() openCommentsModal: (postId: number) => void;
  @Input() openDetailsModal: (post: any) => void;
  @Input() origin: any;
  @Input() post: any;
  @Input() price: number;
  @Input() title: string;
  @Input() type: string;
  @Input() user: any;

  private destinationName: string = "";
  private originName: string = "";
  constructor() {}

  ngOnInit() {}

  ngOnChanges() {
    this.getOriginName();
    this.getDestinationName();
  }

  getDestinationName() {
    if (this.destination) {
      this.destinationName =
        this.destination.name + " - " + this.destination.department.name;
    }
  }

  getOriginName() {
    if (this.origin) {
      this.originName = this.origin.name + " - " + this.origin.department.name;
    }
  }
}
