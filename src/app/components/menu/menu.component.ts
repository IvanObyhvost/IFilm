import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/models/menu/menuItem';
import { Menu } from 'src/app/models/menu/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent  {
  public menu: Menu;
  constructor() {
    this.menu = new Menu(this.getMenuItems());
  }
  private getMenuItems() {
    return [
      new MenuItem('Top 20 films', 'top'),
      new MenuItem('Films for decades', 'decades'),
      new MenuItem('Favorite films', 'favorite')
    ];
  }
}
