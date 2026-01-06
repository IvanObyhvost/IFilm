import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class FilmsApiService {
  private readonly http = inject(HttpClient);

  getFilms(start: number, end: number) {}

  getStorageFilms(): Observable<any[]> {
    return this.http
      .get("./assets/data/films.json")
      .pipe(map((response: any) => response.data.movies));
  }
}
