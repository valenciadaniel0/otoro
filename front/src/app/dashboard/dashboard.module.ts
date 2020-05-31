import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { DashboardPageRoutingModule } from "./dashboard-routing.module";

import { DashboardPage } from "./dashboard.page";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    CommonModule    
  ],
  declarations: [DashboardPage],
})
export class DashboardPageModule {}
