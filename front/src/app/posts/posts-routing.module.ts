import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

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
  {
    path: "list/:user-id",
    loadChildren: () =>
      import("./posts-list/posts-list.module").then(
        (m) => m.PostsListPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
