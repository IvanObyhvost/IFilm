import { Component, OnInit, Input } from '@angular/core';
import { Film } from 'src/app/models/film/film';

@Component({
  selector: 'app-card-film-list',
  templateUrl: './card-film-list.component.html',
  styleUrls: ['./card-film-list.component.scss']
})
export class CardFilmListComponent  {
  @Input() message: string;
  @Input() films: Film[];
  constructor() { }

}
