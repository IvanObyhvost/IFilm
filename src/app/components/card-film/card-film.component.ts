import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Film } from 'src/app/models/film/film';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.scss']
})
export class CardFilmComponent implements OnInit {
  @Input() film: Film;
  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

  onClickFavorite(id: number) {
    this.storeService.toggleFavoriteFilm(id);
  }
}
