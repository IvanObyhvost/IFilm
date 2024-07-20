import { CommonModule } from "@angular/common";
import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  inject,
} from "@angular/core";
import { Observable, of } from "rxjs";
import { CardFilmComponent } from "./card-film/card-film.component";
import { IFilm } from "@app/core/interfaces";
import { FilmService } from "@app/core/services/film/film.service";

@Component({
  selector: "app-card-film-list",
  templateUrl: "./card-film-list.component.html",
  styleUrls: ["./card-film-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, CardFilmComponent],
})
export class CardFilmListComponent implements OnInit {
  @Input() type: "top" | "favorite" = "favorite";
  @Input() noData: string;
  public films$: Observable<IFilm[]>;
  public isLoading = true;
  private readonly filmService = inject(FilmService);

  ngOnInit(): void {
    this.films$ = this.filmService.get();
  }
}
