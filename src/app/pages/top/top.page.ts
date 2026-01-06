import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { CardFilmListComponent } from "@app/shared/components/card-film-list";

@Component({
  selector: "top-page.page",
  templateUrl: "./top.page.html",
  styleUrls: ["./top.page.scss"],
  imports: [CardFilmListComponent],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class TopPage {}
