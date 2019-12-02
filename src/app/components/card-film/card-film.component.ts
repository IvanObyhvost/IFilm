import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Film } from 'src/app/models/film/film';
import { StoreService } from 'src/app/services/store/store.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.scss']
})
export class CardFilmComponent  {
  @Input() film: Film;
  private directorLink: string;
  constructor(private storeService: StoreService) { 
    this.directorLink = environment.directorLink;
  }
  onClickFavorite(ranking: number) {
    this.storeService.toggleFavoriteFilm(ranking);
  }
  linkForDirector(id: string) {
    window.open(`${this.directorLink}${id}`, '_blank');
  }
}
