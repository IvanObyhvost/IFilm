import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DecadesFilmsComponent } from "./decades-films.component";

const routes: Routes = [
  {
    path: "",
    component: DecadesFilmsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [DecadesFilmsComponent],
})
export class DecadesFilmsComponentModule {}
