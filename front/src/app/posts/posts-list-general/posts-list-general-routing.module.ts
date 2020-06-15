import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsListGeneralPage } from './posts-list-general.page';

const routes: Routes = [
  {
    path: '',
    component: PostsListGeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsListGeneralPageRoutingModule {}
