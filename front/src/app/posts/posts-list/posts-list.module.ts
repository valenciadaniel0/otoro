import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostsListPageRoutingModule } from './posts-list-routing.module';

import { PostsListPage } from './posts-list.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModule,
    PostsListPageRoutingModule
  ],
  declarations: [PostsListPage]
})
export class PostsListPageModule {}
