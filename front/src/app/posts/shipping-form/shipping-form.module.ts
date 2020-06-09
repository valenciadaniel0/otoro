import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ShippingFormPageRoutingModule } from "./shipping-form-routing.module";

import { ShippingFormPage } from "./shipping-form.page";
import { ImagePicker } from "@ionic-native/image-picker/ngx";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ShippingFormPageRoutingModule,
  ],
  declarations: [ShippingFormPage],
  providers: [ImagePicker],
  exports: [],
})
export class ShippingFormPageModule {}
