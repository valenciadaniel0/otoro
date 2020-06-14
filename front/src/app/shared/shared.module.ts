import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from './image/image.component';
import { CardComponent } from './card/card.component';
import { PostCardComponent } from './post-card/post-card.component';
import { SelectCityComponent } from './select-city/select-city.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [CardComponent,PostCardComponent,ImageComponent,SelectCityComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[CardComponent,PostCardComponent,ImageComponent,SelectCityComponent]
})
export class SharedModule { }
