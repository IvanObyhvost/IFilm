import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Film } from "@app/core/interfaces";
import { FilmsApiService } from "../../api/films-api.service";
import { filter, map } from "rxjs/operators";
import { mapToFilm } from "@app/core/mappers/film.mapper";
import { FilmListType } from "@app/core/types";

@Injectable({
  providedIn: "root",
})
export class FilmsService {
  private readonly filmsApiService = inject(FilmsApiService);

  get(type: FilmListType) {
    return this.getFilmsFromJson().pipe(
      map((films) =>
        films.filter((film) => (type === "favorite" ? film.isFavorite : true))
      )
    );
  }

  private getFilmsFromJson(): Observable<Film[]> {
    return this.filmsApiService
      .getStorageFilms()
      .pipe(map((films) => films.slice(0, 8).map(mapToFilm)));
  }
}
