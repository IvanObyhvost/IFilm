import { CommonModule } from "@angular/common";
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  inject,
  TrackByFunction,
} from "@angular/core";
import { CardFilmComponent } from "./card-film/card-film.component";
import { FilmsService } from "@app/core/services";
import { Film } from "src/app/models/film/film";

@Component({
  selector: "app-card-film-list",
  templateUrl: "./card-film-list.component.html",
  styleUrls: ["./card-film-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, CardFilmComponent],
})
export class CardFilmListComponent {
  private readonly filmsService = inject(FilmsService);

  @Input() type: "top" | "favorite" = "favorite";

  films$ = this.filmsService.get();
  isLoading = true;

  trackByFn(index: number, film: any): string {
    return film.idIMDB;
  }
}
