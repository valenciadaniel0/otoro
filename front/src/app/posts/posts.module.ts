import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostsRoutingModule } from './posts-routing.module';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { SellFormPageModule } from './sell-form/sell-form.module';
import { ShippingFormPageModule } from './shipping-form/shipping-form.module';
import { ShippingFormPage } from './shipping-form/shipping-form.page';
import { SellFormPage } from './sell-form/sell-form.page';



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
    SellFormPageModule    
  ],
  exports:[]
})
export class PostsModule { }
