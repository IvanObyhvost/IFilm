import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-favorite-films",
  templateUrl: "./favorite-films.component.html",
  styleUrls: ["./favorite-films.component.scss"],
})
export class FavoriteFilmsComponent implements OnInit {
  // public films: Film[] = [];
  // public message = 'You have not added films to your favorites';
  // constructor(private storeService: StoreService) { }

  ngOnInit() {
    // this.storeService.FavoriteFilms.subscribe(films => this.films = films);
  }
}
