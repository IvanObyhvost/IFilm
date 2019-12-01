import { Injectable, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film/film';
import { BehaviorSubject } from 'rxjs';
import { FilmService } from '../film/film.service';
import { map } from 'rxjs/operators';
const key = 'favoriteFilms';
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private favoriteFilms: Film[] = [];
  private favoriteFilmsEvent = new BehaviorSubject<Film[]>([]);
  private films: Film[] = [];
  private filmsEvent = new BehaviorSubject<Film[]>([]);
  private isLoading = new BehaviorSubject<boolean>(false);
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
    this.favoriteFilmsEvent.next(this.favoriteFilms);
  }

  getTopFilms(limit: number) {
    return this.filmService.get(limit).pipe(
      map(response => {
        this.films = response.map(film => {
          film.isFavorite = this.favoriteFilms.some(favoriteFilm => 
            favoriteFilm.ranking === film.ranking);
          return film;
        });
        return this.films;
      })
    )
  }
  get FavoriteFilms() {
    return this.favoriteFilmsEvent;
  }

  toggleFavoriteFilm(ranking: number) {
    const film = this.films.find(film => film.ranking === ranking);
    if (film) {
      const favoriteFilm = this.favoriteFilms.find(film => film.ranking === ranking);
      if (favoriteFilm) {
        this.favoriteFilms = this.favoriteFilms.filter(film => film.ranking !== ranking);
        film.isFavorite = false;
      } else {
        this.favoriteFilms = [...this.favoriteFilms, film];
        film.isFavorite = true;
      }
      localStorage.setItem(key, JSON.stringify(this.favoriteFilms));
      this.favoriteFilmsEvent.next(this.favoriteFilms);
      this.filmsEvent.next(this.films);
    }
  }

  setIsLoading(value: boolean) {
    this.isLoading.next(value);
  }

  get IsLoading() {
    return this.isLoading;
  }

  get Films() {
    return this.filmsEvent;
  }
}
