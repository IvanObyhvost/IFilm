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
  private start = 1;
  private end = 20;
  constructor(private loaderService: LoaderService,
              private storeService: StoreService) { }
  ngOnInit(): void {
    this.loaderService.setIsLoading(true);
    this.storeService.getTopFilms(this.start, this.end).subscribe(
      films => {
        this.storeService.setFilms(films);
        this.loaderService.setIsLoading(false);
      },
      err => {
        console.error(err);
        this.loaderService.setIsLoading(false);
      }
    );
  }
}
