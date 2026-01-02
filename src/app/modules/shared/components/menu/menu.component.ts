import { ChangeDetectionStrategy, Component } from "@angular/core";
import { MENU } from "../../constants";
import { NgForOf } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MenuItem } from "@app/shared/interfaces";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NgForOf, RouterModule],
})
export class MenuComponent {
  public menuItems: MenuItem[] = Object.values(MENU);

  public trackByIndex(index: number): number {
    return index;
  }
}
