import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private isLoading = new BehaviorSubject<boolean>(false);
  constructor() { }
  get IsLoading() {
    return this.isLoading;
  }
  setIsLoading(value: boolean) {
    this.isLoading.next(value);
  }
}
