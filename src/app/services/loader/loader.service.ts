import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoading = new BehaviorSubject<boolean>(false);
  get IsLoading() {
    return this.isLoading;
  }
  constructor() { }
  setIsLoading(value: boolean) {
    this.isLoading.next(value);
  }
}
