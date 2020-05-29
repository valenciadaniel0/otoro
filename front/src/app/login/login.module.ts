import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginRoutingModule } from "./login-routing.module";
import { SharedModule } from "../shared/shared.module";
import { IonicModule } from "@ionic/angular";
import { FormPage } from "./form/form.page";
import { TopContentComponent } from './top-content/top-content.component';
import { DashboardPageModule } from '../dashboard/dashboard.module';

@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    LoginRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    DashboardPageModule
  ],
  declarations: [FormPage,TopContentComponent],
})
export class LoginModule {}
