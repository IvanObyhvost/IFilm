import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import { AngularSvgIconModule } from "angular-svg-icon";

@Component({
  selector: "app-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [AngularSvgIconModule],
})
export class IconComponent {
  @Input() name: string;

  get path() {
    return "assets/icons/" + this.name + ".svg";
  }
}
