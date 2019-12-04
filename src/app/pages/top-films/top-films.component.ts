import { Component, OnInit } from '@angular/core';
import { FilmService } from 'src/app/services/film/film.service';
import { Film } from 'src/app/models/film/film';
import { StoreService } from 'src/app/services/store/store.service';
import { IMessage } from 'src/app/interfaces/pages/IMessage';

@Component({
  selector: 'app-top-films',
  templateUrl: './top-films.component.html',
  styleUrls: ['./top-films.component.scss']
})
export class TopFilmsComponent implements OnInit, IMessage {
  public films: Film[];
  public message = 'The list is empty';
  constructor(private storeService: StoreService) { }
  ngOnInit() {
    this.storeService.Films.subscribe(films => this.films = films);
  }
}
