import { Component, OnInit } from "@angular/core";

@Component({
  selector: "top-page",
  templateUrl: "./top.page.html",
  styleUrls: ["./top.page.scss"],
})
export class TopPage implements OnInit {
  // public films: Film[];
  // public message = "The list is empty";
  // constructor(private storeService: StoreService) { }
  ngOnInit() {
    // this.storeService.Films.subscribe(films => this.films = films);
  }
}
