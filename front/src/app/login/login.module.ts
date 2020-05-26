import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginRoutingModule } from "./login-routing.module";
import { SharedModule } from "../shared/shared.module";
import { IonicModule } from "@ionic/angular";
import { FormPage } from "./form/form.page";

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    LoginRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
  ],
  declarations: [FormPage],
})
export class LoginModule {}
