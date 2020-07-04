import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { UsersPageRoutingModule } from "./users-routing.module";

import { UsersPage } from "./users.page";
import { UsersService } from "./users.service";
import { IonicStorageModule } from "@ionic/storage";
import { RecoverPasswordPage } from "./recover-password/recover-password.page";
import { RegisterFormPage } from "./register-form/register-form.page";
import { ProfilePage } from './profile/profile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UsersPageRoutingModule,
    IonicStorageModule.forRoot(),
  ],
  declarations: [UsersPage, RecoverPasswordPage, RegisterFormPage,ProfilePage],
  providers: [UsersService],
})
export class UsersPageModule {}
