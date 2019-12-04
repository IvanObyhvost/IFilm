import { Injectable } from '@angular/core';
import { of, from } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import data from 'src/assets/data/films.json';

const httpOptions = {
  headers: new HttpHeaders()
};

const keys = {
  films: 'films',
  favoriteFilms: 'favoriteFilms'
};

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }
  getTest(start: number = 1, end: number = 20) {
    return of(data).pipe(
      delay(1500),
      map((response: any) => {
        return response.data.movies.map((film: any) => {
          film.isFavorite = false;
          return film;
        });
      })
    );
  }

  getFilms(start: number = 1, end: number = 20) {
    httpOptions.headers.set('Origin', '')
    return this.http.get(`https://cors-anywhere.herokuapp.com/${environment.api}imdb/top/?start=${start}&end=${end}&token=${environment.token}&format=json&data=1`, httpOptions).pipe(
      catchError(err => {
        return of(JSON.parse(localStorage.getItem(keys.films)));
      }),
      catchError(err => this.getTest()),
      map((response: any) => {
        return response.data.movies.map((film: any) => {
          film.isFavorite = false;
          return film;
        });
      })
    )
  }
  getFilmsFromApi(start: number = 1, end: number = 20) {
    return this.http.get(`${environment.api_themoviedb}movie/top_rated?api_key=${environment.api_key}`).pipe(
      map((response: any) => {
        return response.results.map((film: any) => {
          film.isFavorite = false;
          return film;
        });
      })
    )
  }
}