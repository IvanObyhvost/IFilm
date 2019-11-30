import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public isLoading = false;
  constructor(private storeService: StoreService) { }

  ngOnInit() {
    this.storeService.IsLoading.subscribe(isLoading => this.isLoading = isLoading);
  }

}
