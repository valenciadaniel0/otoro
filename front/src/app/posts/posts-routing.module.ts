import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: "create-shipping/:id",
    loadChildren: () =>
      import("./shipping-form/shipping-form.module").then(
        (m) => m.ShippingFormPageModule
      ),
  },
  {
    path: "create-sell/:id",
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
  {
    path: "posts-list-general",
    loadChildren: () =>
      import("./posts-list-general/posts-list-general.module").then(
        (m) => m.PostsListGeneralPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
