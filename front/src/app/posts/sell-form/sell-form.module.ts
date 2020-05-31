import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { SellFormPageRoutingModule } from "./sell-form-routing.module";

import { SellFormPage } from "./sell-form.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SellFormPageRoutingModule,
  ],
  declarations: [SellFormPage],
})
export class SellFormPageModule {}
