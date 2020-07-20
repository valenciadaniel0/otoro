import { Component, OnInit, Input } from "@angular/core";
import { PostService } from "src/app/posts/post.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-post-card",
  templateUrl: "./post-card.component.html",
  styleUrls: ["./post-card.component.scss"],
})
export class PostCardComponent implements OnInit {
  @Input() auth: any;
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

  private commentsNumber: any = 0;
  private destinationName: string = "";
  private originName: string = "";
  private image: string = `${environment.default_post_img}`;
  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getCommentsNumber();
    if (this.imageSrc) {
      this.image = `${environment.posts_pictures_url}${this.imageSrc}.jpg`;
    }
  }

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

  getCommentsNumber() {
    this.postService
      .getCommentsNumber(this.id, this.auth)
      .toPromise()
      .then((response) => {
        /* let body = response._body?response._body:undefined;
        this.commentsNumber = _body; */
      });
  }
}
