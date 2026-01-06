import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Film } from "@app/core/interfaces";
import { JoinPipe } from "@app/shared/pipes";
import { IconComponent } from "../..";

@Component({
  selector: "app-card-film",
  templateUrl: "./card-film.component.html",
  styleUrls: ["./card-film.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, JoinPipe, IconComponent],
})
export class CardFilmComponent {
  @Input() film: Film;

  onClickFavorite() {}
}
