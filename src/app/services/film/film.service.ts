import { Injectable } from '@angular/core';
import { of  } from 'rxjs';
import { take, toArray, delay, map } from 'rxjs/operators';
import { Film } from 'src/app/models/film/film';
import data from './data';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }
  get(limit: number) {
    const response = of(data);
    return response.pipe(
      delay(1000),
      map((response: any) => {
        return response.data.movies.map((film: any) => {
          film.isFavorite = false;
          return film;
        });
      }
      )
    )
  }
  getFilms(start: number = 1, end: number = 20) {
    return this.http.get(`${environment.api}top/?start=${start}&end=${end}&token=${environment.token}&format=json`).pipe(
      map((response : any)=> {
        return response.data.movies.map((film: any) => {
          film.isFavorite = false;
          return film;
        });
      })
    )
  }
}