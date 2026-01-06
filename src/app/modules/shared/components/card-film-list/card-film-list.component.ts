import { CommonModule } from "@angular/common";
import {
  Component,
  Input,
  ChangeDetectionStrategy,
  inject,
} from "@angular/core";
import { CardFilmComponent } from "./card-film/card-film.component";
import { FilmsService } from "@app/core/services";
import { FilmListType } from "@app/core/types";
import { Film } from "@app/core/interfaces";
import { Observable } from "rxjs";

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

  @Input() set type(value: FilmListType) {
    this.films$ = this.filmsService.get(value);
  }

  films$!: Observable<Film[]>;

  isLoading = true;

  trackByFn(index: number, film: any): string {
    return film.idIMDB;
  }
}
