import { ChangeDetectionStrategy, Component } from "@angular/core";
import { CardFilmListComponent } from "@app/shared/components/card-film-list";

@Component({
  selector: "app-favorite-films.page",
  templateUrl: "./favorite-films.component.html",
  styleUrls: ["./favorite-films.component.scss"],
  standalone: true,
  imports: [CardFilmListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FavoriteFilmsComponent {}
