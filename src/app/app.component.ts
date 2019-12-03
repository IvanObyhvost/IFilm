import { Component, OnInit } from '@angular/core';
import { StoreService } from './services/store/store.service';
import { LoaderService } from './services/loader/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'ifilm';
  constructor(private loaderService: LoaderService,
              private storeService: StoreService) {}
  ngOnInit(): void {
    this.loaderService.setIsLoading(true);
    this.storeService.getTopFilms().subscribe(films => {
      this.storeService.setFilms(films);
      this.loaderService.setIsLoading(false);
    });
  }
}
