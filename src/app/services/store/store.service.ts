import { Injectable } from '@angular/core';
import { Film } from 'src/app/models/film/film';
import { of, forkJoin } from 'rxjs';
import { FilmService } from '../film/film.service';
import { map, catchError } from 'rxjs/operators';
import { TrailerService } from '../trailer/trailer.service';
import { IStore } from 'src/app/interfaces/store/IStore';
import { Store } from 'src/app/models/store/store';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private store: IStore;
  constructor(private filmService: FilmService,
              private trailerService: TrailerService) {
    this.store = new Store();
    this.getFavoriteFilmsFromLocalStorage();
  }

  private getFavoriteFilmsFromLocalStorage() {
    const data = localStorage.getItem(environment.localStorage_keys.favoriteFilmIds);
    const favoriteFilmIds = JSON.parse(data) || [];
    this.store.setFavoriteFilms(favoriteFilmIds);
  }

  private getFilmsData(response: any) {
    let films = response[0] as Film[];
    const trailers = response[1];
    if (films) {
      films = films.map((film: Film) => {
        film.isFavorite = this.store.favoriteFilmsIds.some(id => id === film.idIMDB);
        const trailersData = trailers.find(trailer => trailer.idIMDB === film.idIMDB);
        if (trailersData) {
          film.trailers = trailersData.results.sort((a, b) => a.size - b.size);
        }
        return film;
      });
      localStorage.setItem(environment.localStorage_keys.films, JSON.stringify(this.store.films));
    }
    return films;
  }
  getTopFilms(start: number, end: number) {
    const observablesApi = forkJoin(
      this.filmService.get(start, end),
      this.trailerService.getAll()
    );

    return observablesApi.pipe(
      map(response => this.getFilmsData(response)),
      catchError(err => of([]))
    );
  }

  get FavoriteFilms() {
    return this.store.getFavoriteFilms();
  }

  get Films() {
    return this.store.getFilms();
  }

  setFilms(films: Film[]) {
    this.store.setFilms(films);
  }

  toggleFavoriteFilm(idIMDB: string) {
    this.store.toggleFavoriteFilm(idIMDB);
    localStorage.setItem(environment.localStorage_keys.favoriteFilmIds, JSON.stringify(this.store.favoriteFilmsIds));
  }
}
