import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Film } from 'src/app/models/film/film';
import { StoreService } from 'src/app/services/store/store.service';
import { environment } from 'src/environments/environment';
import { NgxSmartModalService } from 'ngx-smart-modal';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-card-film',
  templateUrl: './card-film.component.html',
  styleUrls: ['./card-film.component.scss']
})
export class CardFilmComponent  {
  @Input() film: Film;
  private directorLink: string;
  private identifier = 'myModal';
  constructor(private storeService: StoreService,
              private ngxSmartModalService: NgxSmartModalService) {
    this.directorLink = environment.directorLink;
  }
  onClickFavorite(idIMDB: string) {
    this.storeService.toggleFavoriteFilm(idIMDB);
  }
  linkForDirector(id: string) {
    window.open(`${this.directorLink}${id}`, '_blank');
  }

  openTrailer(trailer: any) {
    const {title} = this.film;
    const data = {
      ...trailer,
      title
    }
    const modal = this.ngxSmartModalService.get(this.identifier);
    modal.setData(data);
    modal.open();
  }
}
