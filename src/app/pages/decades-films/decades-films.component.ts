import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service';
import { Film } from 'src/app/models/film/film';

@Component({
  selector: 'app-decades-films',
  templateUrl: './decades-films.component.html',
  styleUrls: ['./decades-films.component.scss']
})
export class DecadesFilmsComponent implements OnInit {
  public films: Film[];
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.storeService.Films.subscribe(films => {
      this.films = films;
    });
  }

}
