import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostsListGeneralPageRoutingModule } from './posts-list-general-routing.module';

import { PostsListGeneralPage } from './posts-list-general.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SharedModule,
    PostsListGeneralPageRoutingModule
  ],
  declarations: [PostsListGeneralPage]
})
export class PostsListGeneralPageModule {}
