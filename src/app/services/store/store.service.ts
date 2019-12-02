import { Injectable, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film/film';
import { BehaviorSubject, of } from 'rxjs';
import { FilmService } from '../film/film.service';
import { map, catchError } from 'rxjs/operators';
const keys = {
  films: 'films',
  favoriteFilms: 'favoriteFilms'
};
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private films: Film[] = [];
  private filmsEvent = new BehaviorSubject<Film[]>([]);
  private favoriteFilms: number[] = [];
  constructor(private filmService: FilmService) {
    this.getFavoriteFilmsFromLocalStorage();
  }
  private getFavoriteFilmsFromLocalStorage() {
    try {
      const data = localStorage.getItem(keys.favoriteFilms);
      this.favoriteFilms = JSON.parse(data) || [];
    } catch (error) {
      this.favoriteFilms = [];
    }
  }

  getTopFilms(limit: number) {
    return this.filmService.get(limit).pipe(
      map(response => {
        this.films = response.map(film => {
          film.isFavorite = this.favoriteFilms.some(ranking => ranking === film.ranking);
          return film;
        });
        localStorage.setItem(keys.films, JSON.stringify(this.films));
        return this.films;
      }),
      catchError(err => {
        return of(JSON.parse(localStorage.getItem(keys.films)));
      }),
      map(films => films),
      catchError(err => {
        return of([]);
      })
    );
  }
  get FavoriteFilms() {
    return this.filmsEvent.pipe(
      map(films => films.filter(f => this.favoriteFilms.includes(f.ranking)))
      // filter((film: Film[], index: number) => this.favoriteFilms.includes(film[index].ranking))
    );
  }

  get Films() {
    return this.filmsEvent;
  }

  setFilms(films: Film[]) {
    this.films = films;
    this.filmsEvent.next(films);
  }

  toggleFavoriteFilm(ranking: number) {
    const selectedFilm = this.films.find(film => film.ranking === ranking);
    if (selectedFilm) {
      const favoriteFilm = this.favoriteFilms.find(favoriteRanking => favoriteRanking === ranking);
      if (favoriteFilm) {
        this.favoriteFilms = this.favoriteFilms.filter(favoriteRanking => favoriteRanking !== ranking);
        selectedFilm.isFavorite = false;
      } else {
        this.favoriteFilms = [...this.favoriteFilms, selectedFilm.ranking];
        selectedFilm.isFavorite = true;
      }
      localStorage.setItem(keys.favoriteFilms, JSON.stringify(this.favoriteFilms));
    }
  }

}
