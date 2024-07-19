import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MENU } from "../../constants";
import { NgForOf } from "@angular/common";
import { RouterModule } from "@angular/router";

interface IMenuItem {
  name: string;
  link: string;
}

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgForOf, RouterModule],
})
export class MenuComponent {
  public menuItems: IMenuItem[] = Object.values(MENU).map((item) => item);
}
