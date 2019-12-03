import { Injectable, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film/film';
import { BehaviorSubject, of, forkJoin } from 'rxjs';
import { FilmService } from '../film/film.service';
import { map, catchError, switchMap } from 'rxjs/operators';
import { TrailerService } from '../trailer/trailer.service';
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
  private favoriteFilmsEvent = new BehaviorSubject<number[]>([]);
  constructor(private filmService: FilmService,
              private trailerService: TrailerService) {
    this.getFavoriteFilmsFromLocalStorage();
  }
  private getFavoriteFilmsFromLocalStorage() {
    try {
      const data = localStorage.getItem(keys.favoriteFilms);
      this.favoriteFilms = JSON.parse(data) || [];
    } catch (error) {
      this.favoriteFilms = [];
    }
    this.favoriteFilmsEvent.next(this.favoriteFilms);
  }

  getTopFilms(start: number = 1, end: number = 20) {
    return forkJoin(
      this.filmService.getTest(),
      this.trailerService.getAll()
    ).pipe(
      map(response => {
        let [films, trailers] = response;
        films = films.map((film: Film) => {
          const trailersData = trailers.find(trailer => trailer.idIMDB === film.idIMDB);
          if (trailersData) {
            film.trailers = trailersData.results.sort((a, b) => a.size - b.size);
          }
          return film;
        });
        return films;
      }),
      catchError(err => {
        return of([]);
      })
    );
  }
  private getFilms = response => {
    this.films = response.map(film => {
      film.isFavorite = this.favoriteFilms.some(ranking => ranking === film.ranking);
      return film;
    });
    localStorage.setItem(keys.films, JSON.stringify(this.films));
    return this.films;
  }
  get FavoriteFilms() {
    return this.favoriteFilmsEvent.pipe(
      switchMap(() => this.filmsEvent),
      map(films => films.filter(f => this.favoriteFilms.includes(f.ranking)))
    );
    // return this.filmsEvent.pipe(
    //   map(films => films.filter(f => this.favoriteFilms.includes(f.ranking)))
    //   // filter((film: Film[], index: number) => this.favoriteFilms.includes(film[index].ranking))
    // );
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
      this.favoriteFilmsEvent.next(this.favoriteFilms);
    }
  }

}
