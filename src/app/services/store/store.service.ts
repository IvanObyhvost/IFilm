import { Injectable, OnInit } from '@angular/core';
import { Film } from 'src/app/models/film/film';
import { BehaviorSubject } from 'rxjs';
import { FilmService } from '../film/film.service';
import { map } from 'rxjs/operators';
const key = 'favoriteFilms';
@Injectable({
  providedIn: 'root'
})
export class StoreService implements OnInit{
  
  private favoriteFilms: Film[] = [];
  private favoriteFilmsEvent = new BehaviorSubject<Film[]>([]);
  private films: Film[] = [];
  constructor(private filmService: FilmService) { 
    
  }
  ngOnInit(): void {
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
        this.films = response;
        return this.films;
      })
    )
  }

  get FavoriteFilms() {
    return this.favoriteFilms;
  }

  toggleFavoriteFilm(id: number) {
    const favoriteFilm = this.favoriteFilms.find(film => film.id === id);
    if (favoriteFilm) {
      this.favoriteFilms = this.favoriteFilms.filter(film => film.id !== id);
    } else {
      const film = this.films.find(film => film.id === id);
      if (film) {
        this.favoriteFilms = [...this.favoriteFilms, film];
      }
    }
    localStorage.setItem(key, JSON.stringify(this.favoriteFilms));
    this.favoriteFilmsEvent.next(this.favoriteFilms);
  }

}
