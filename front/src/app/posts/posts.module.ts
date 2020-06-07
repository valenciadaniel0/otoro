import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PostsRoutingModule } from "./posts-routing.module";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "../shared/shared.module";
import { SellFormPageModule } from "./sell-form/sell-form.module";
import { ShippingFormPageModule } from "./shipping-form/shipping-form.module";
import { HTTP } from "@ionic-native/http/ngx";

@NgModule({
  declarations: [],
  imports: [
    FormsModule,
    HttpClientModule,
    PostsRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    CommonModule,    
    SharedModule,
    ShippingFormPageModule,
    SellFormPageModule,    
  ],
  providers: [HTTP],
  exports: [],
})
export class PostsModule {}
