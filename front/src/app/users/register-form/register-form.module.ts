import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RegisterFormPageRoutingModule } from "./register-form-routing.module";
import { PhotoCardComponent } from "src/app/shared/photo-card/photo-card.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterFormPageRoutingModule,
  ],
  declarations: [PhotoCardComponent],
})
export class RegisterFormPageModule {}
