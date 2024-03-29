import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/services/loader/loader.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public isLoading: BehaviorSubject<boolean>;
  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.isLoading = this.loaderService.IsLoading;
  }

}
