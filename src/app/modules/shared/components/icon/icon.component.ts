import {
  ChangeDetectionStrategy,
  Component,
  Input,
  NgModule,
} from "@angular/core";
import { AngularSvgIconModule } from "angular-svg-icon";

@Component({
  selector: "app-icon",
  templateUrl: "./icon.component.html",
  styleUrls: ["./icon.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  @Input() name: string;
  public get path() {
    return "assets/icons/" + this.name + ".svg";
  }
}

@NgModule({
  imports: [AngularSvgIconModule],
  declarations: [IconComponent],
  exports: [IconComponent],
})
export class IconComponentModule {}
