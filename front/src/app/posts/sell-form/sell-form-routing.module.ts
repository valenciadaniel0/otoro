import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellFormPage } from './sell-form.page';

const routes: Routes = [
  {
    path: '',
    component: SellFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellFormPageRoutingModule {}
