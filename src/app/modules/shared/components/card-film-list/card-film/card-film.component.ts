import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IFilm } from "@app/core/interfaces";
import { JoinPipe } from "@app/shared/pipes";
import { IconComponentModule } from "../..";

@Component({
  selector: "app-card-film",
  templateUrl: "./card-film.component.html",
  styleUrls: ["./card-film.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, JoinPipe, IconComponentModule],
})
export class CardFilmComponent {
  @Input() film: IFilm;
  // private identifier = 'myModal';
  // constructor(private storeService: StoreService,
  //             private ngxSmartModalService: NgxSmartModalService) {
  // }
  public onClickFavorite() {
    this.film.idIMDB;
  }
  // onClickFavorite(idIMDB: string) {
  //   this.storeService.toggleFavoriteFilm(idIMDB);
  // }
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
