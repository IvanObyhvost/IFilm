import { Injectable, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film/film';
import { BehaviorSubject, of } from 'rxjs';
import { FilmService } from '../film/film.service';
import { map } from 'rxjs/operators';
const key = 'favoriteFilms';
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
      const data = localStorage.getItem(key);
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
        return this.films;
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
      localStorage.setItem(key, JSON.stringify(this.favoriteFilms));
    }
  }

}
