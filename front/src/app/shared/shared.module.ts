import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ImageComponent } from "./image/image.component";
import { CardComponent } from "./card/card.component";
import { PostCardComponent } from "./post-card/post-card.component";
import { SelectCityComponent } from "./select-city/select-city.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommentsComponent } from "./comments/comments.component";
import { PostDetailsComponent } from "./post-details/post-details.component";
import { PhotoCardComponent } from "./photo-card/photo-card.component";

@NgModule({
  declarations: [
    CardComponent,
    PostCardComponent,
    ImageComponent,
    SelectCityComponent,
    CommentsComponent,
    PostDetailsComponent,
    PhotoCardComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    CardComponent,
    PostCardComponent,
    ImageComponent,
    SelectCityComponent,
    CommentsComponent,
    PostDetailsComponent,
    PhotoCardComponent,
  ],
})
export class SharedModule {}
