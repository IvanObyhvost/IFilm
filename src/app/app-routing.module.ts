import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

export const routes: Routes = [
  {
    path: "top",
    loadComponent: () => import("./pages/top/top.page"),
  },
  {
    path: "decades",
    loadChildren: () =>
      import("./pages/decades/decades-films.module").then(
        (m) => m.DecadesFilmsComponentModule
      ),
  },
  {
    path: "favorite",
    loadChildren: () =>
      import("./pages/favorite/favorite-films.module").then(
        (m) => m.FavoriteFilmsComponentModule
      ),
  },
  { path: "**", redirectTo: "top" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
