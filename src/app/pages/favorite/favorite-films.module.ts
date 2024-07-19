import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavoriteFilmsComponent } from "./favorite-films.component";

const routes: Routes = [
  {
    path: "",
    component: FavoriteFilmsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [FavoriteFilmsComponent],
})
export class FavoriteFilmsComponentModule {}
