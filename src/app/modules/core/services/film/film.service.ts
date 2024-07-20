import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { CoreModule } from "../../core.module";
import { environment } from "@environment";
import { Observable, of } from "rxjs";
import { delay, map } from "rxjs/operators";
import data from "src/assets/data/films.json";
import { IFilm } from "@app/core/interfaces";

const httpOptions = {
  headers: new HttpHeaders(),
  params: new HttpParams(),
};

@Injectable({
  providedIn: CoreModule,
})
export class FilmService {
  constructor(private http: HttpClient) {}

  // private getFilmsData(films: Film[]): Film[] {
  //   return films.map((film: any) => {
  //     film.isFavorite = false;
  //     return film;
  //   });
  // }

  getFilmsFromJson(): Observable<IFilm[]> {
    return of(data).pipe(map((response: any) => response.data.movies));
  }
  // getFilmsFromLocalStorage() {
  //   return of(JSON.parse(localStorage.getItem("sdf"))).pipe(
  //     map((response: any) => {
  //       if (!response) {
  //         throw new Error("No data in localStorage");
  //       }
  //       this.getFilmsData(response.data.movies);
  //     })
  //   );
  // }

  getFilms(start: number, end: number) {
    const { cors_url, api, token } = environment;
    httpOptions.headers.set("Origin", "");
    let params = new HttpParams();
    params = params.appendAll({ token, format: "json" });
    const url = `${api}imdb/top`;
    return this.http.get(url, { headers: httpOptions.headers, params });
  }
  // getFilmsFromApi(start: number, end: number) {
  //   httpOptions.headers.set("Origin", "");
  //   const { cors_url, api, token } = environment;
  //   const url = `${cors_url}${api}imdb/top/?start=${start}&end=${end}&format=json&data=1&token=${token}`;

  //   return this.http
  //     .get(url, httpOptions)
  //     .pipe(map((response: any) => this.getFilmsData(response.data.movies)));
  // }
  get() {
    return this.getFilmsFromJson();
  }
  // get(start: number, end: number) {
  //   return this.getFilmsFromApi(start, end).pipe(
  //     catchError((err) => this.recallGet(err, this.getFilmsFromLocalStorage())),
  //     catchError((err) => this.recallGet(err, this.getFilmsFromJson())),
  //     catchError(() => of([]))
  //   );
  // }
  // private recallGet(err: any, stream: Observable<any>): Observable<any> {
  //   console.error(err);
  //   return stream;
  // }
}
