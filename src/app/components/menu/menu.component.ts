import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public menu: object[] = [];
  constructor() { }

  ngOnInit() {
    this.menu = this.getMenuItems();
  }
  getMenuItems() {
    return [
      {
        name: 'Top 20 films',
        link: 'top'
      },
      {
        name: 'Movies for decades',
        link: 'decades'
      },
      {
        name: 'Favorite films',
        link: 'favorite'
      }
    ]
  }
}
