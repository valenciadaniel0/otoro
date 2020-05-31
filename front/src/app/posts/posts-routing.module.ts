import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { ShippingFormPage } from "./shipping-form/shipping-form.page";

const routes: Routes = [
  {
    path: "create-shipping",
    loadChildren: () =>
      import("./shipping-form/shipping-form.module").then(
        (m) => m.ShippingFormPageModule
      ),
  },
  {
    path: "create-sell",
    loadChildren: () =>
      import("./sell-form/sell-form.module").then((m) => m.SellFormPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
