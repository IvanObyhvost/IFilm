import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TopPage } from "./top.page";

const routes: Routes = [
  {
    path: "",
    component: TopPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [TopPage],
})
export class TopPageModule {}
