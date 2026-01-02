import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IFilm } from "@app/core/interfaces";
import { JoinPipe } from "@app/shared/pipes";
import { IconComponent } from "../..";
import { StoreService } from "@app/core/services/store/store.service";

@Component({
  selector: "app-card-film",
  templateUrl: "./card-film.component.html",
  styleUrls: ["./card-film.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, JoinPipe, IconComponent],
})
export class CardFilmComponent {
  @Input() film: IFilm;
  // private identifier = 'myModal';
  constructor(private storeService: StoreService) {
    // private ngxSmartModalService: NgxSmartModalService) {
  }

  onClickFavorite() {
    // this.storeService.toggleFavoriteFilm(film.idIMDB);
  }
  // linkForDirector(id: string) {
  //   openDirectorLink(id);
  // }
  // openTrailer(trailer: TrailerData) {
  //   const { title } = this.film;
  //   const { key } = trailer;
  //   const data: TrailerData = {
  //     title,
  //     key
  //   };
  //   const modal = this.ngxSmartModalService.get(this.identifier);
  //   modal.setData(data);
  //   modal.open();
  // }
}
