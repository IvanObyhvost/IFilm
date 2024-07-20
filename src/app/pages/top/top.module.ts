import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TopPage } from "./top.page";
import { CardFilmListComponent } from "@app/shared/components/card-film-list";

const routes: Routes = [
  {
    path: "",
    component: TopPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CardFilmListComponent],
  declarations: [TopPage],
})
export class TopPageModule {}
