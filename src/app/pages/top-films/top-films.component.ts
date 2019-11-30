import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film/film.service';
import { Film } from 'src/app/models/film/film';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-top-films',
  templateUrl: './top-films.component.html',
  styleUrls: ['./top-films.component.scss']
})
export class TopFilmsComponent implements OnInit {
  public films: Film[];
  private limit = 5;
  constructor(private storeService: StoreService) {

  }

  ngOnInit() {
    this.storeService.setIsLoading(true);
    this.storeService.getTopFilms(this.limit).subscribe(films => {
      this.films = films;
      this.storeService.setIsLoading(false);
    });
    this.storeService.Films.subscribe(films => this.films = films);
  }
}
