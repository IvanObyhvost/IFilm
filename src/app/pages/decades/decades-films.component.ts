import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-decades-films",
  templateUrl: "./decades-films.component.html",
  styleUrls: ["./decades-films.component.scss"],
})
export class DecadesFilmsComponent implements OnInit {
  // public films: Film[];
  // public message = 'Data not available!';
  // constructor(private storeService: StoreService) { }

  ngOnInit() {
    // this.storeService.Films.subscribe(
    //   films => this.films = films,
    //   err => {
    //     console.error(err);
    //     this.films = [];
    //   });
  }
}
