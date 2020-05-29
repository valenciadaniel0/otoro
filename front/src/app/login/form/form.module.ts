import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { FormPageRoutingModule } from "./form-routing.module";

import { FormPage } from "./form.page";
import { TopContentComponent } from '../top-content/top-content.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, FormPageRoutingModule, TopContentComponent],
  declarations: [FormPage],
})
export class FormPageModule {}
