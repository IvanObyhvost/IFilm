import { Component, OnInit } from '@angular/core';
import { StoreService } from './services/store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title = 'ifilm';
  private limit = 5;
  constructor(private storeService: StoreService) {}
  
  ngOnInit(): void {
    // this.storeService.setIsLoading(true);
    this.storeService.getTopFilms(this.limit).subscribe(films => {
      this.storeService.setFilms(films);
      // this.storeService.setIsLoading(false);
    });
  }
}
