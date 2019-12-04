import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import data from 'src/assets/data/films.json';
import { Film } from 'src/app/models/film/film';

const httpOptions = {
  headers: new HttpHeaders()
};

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  constructor(private http: HttpClient) { }

  private getFilmsData(films: Film[]): Film[] {
    return films.map((film: any) => {
      film.isFavorite = false;
      return film;
    });
  }

  getFilmsFromJson() {
    return of(data).pipe(
      delay(environment.delay_time),
      map((response: any) => this.getFilmsData(response.data.movies))
    );
  }
  getFilmsFromLocalStorage() {
    return of(JSON.parse(localStorage.getItem('sdf'))).pipe(
      map((response: any) => {
        if (!response) {
          throw new Error('No data in localStorage');
        }
        this.getFilmsData(response.data.movies);
      })
    );
  }


  getFilmsFromApi(start: number, end: number) {
    httpOptions.headers.set('Origin', '');
    const {cors_url, api, token} = environment;
    const url = `${cors_url}${api}imdb/top/?start=${start}&end=${end}&format=json&data=1&token=${token}`;

    return this.http.get(url, httpOptions).pipe(
      map((response: any) => this.getFilmsData(response.data.movies))
    );
  }
  get(start: number, end: number) {
    // return this.getFilmsFromApi(start, end).pipe(
    return this.getFilmsFromJson().pipe(
      catchError(err => this.recallGet(err, this.getFilmsFromLocalStorage())),
      catchError(err => this.recallGet(err, this.getFilmsFromJson())),
      catchError(err => of([]))
    );
  }
  private recallGet(err: any, stream: Observable<any>): Observable<any> {
    console.error(err);
    return stream;
  }
}
