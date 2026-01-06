import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Film } from "@app/core/interfaces";
import { FilmsApiService } from "../../api/films-api.service";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class FilmsService {
  private readonly filmsApiService = inject(FilmsApiService);

  get() {
    return this.getFilmsFromJson();
  }

  private getFilmsFromJson(): Observable<Film[]> {
    return this.filmsApiService
      .getStorageFilms()
      .pipe(map((films: Film[]) => films.slice(0, 3)));
  }
}
