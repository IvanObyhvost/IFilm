import { Component, Input } from '@angular/core';
import { Film } from 'src/app/models/film/film';
import { StoreService } from 'src/app/services/store/store.service';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { openDirectorLink } from 'src/app/utils/util';
import { Trailer } from 'src/app/models/film/trailer';
import { TrailerData } from 'src/app/interfaces/modal/trailerData';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.scss']
})
export class CardFilmComponent  {
  @Input() film: Film;
  private identifier = 'myModal';

  constructor(private storeService: StoreService,
              private ngxSmartModalService: NgxSmartModalService) {
  }
  onClickFavorite(idIMDB: string) {
    this.storeService.toggleFavoriteFilm(idIMDB);
  }
  linkForDirector(id: string) {
    openDirectorLink(id);
  }

  openTrailer(trailer: TrailerData) {
    const { title } = this.film;
    const { key } = trailer;
    const data: TrailerData = {
      title,
      key
    };

    const modal = this.ngxSmartModalService.get(this.identifier);
    modal.setData(data);
    modal.open();
  }
}
