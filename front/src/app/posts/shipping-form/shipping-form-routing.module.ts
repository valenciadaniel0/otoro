import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShippingFormPage } from './shipping-form.page';

const routes: Routes = [
  {
    path: '',
    component: ShippingFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShippingFormPageRoutingModule {}
