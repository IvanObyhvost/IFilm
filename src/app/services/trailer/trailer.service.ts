import { Injectable } from '@angular/core';
import { map, delay } from 'rxjs/operators';
import trailersData from 'src/assets/data/trailers.json';
import { of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrailerService {
  constructor() { }
  private getAllFromJson() {
    return of(trailersData).pipe(
      delay(environment.delay_time),
      map((response: any) => this.getTrailersData(response.data))
    );
  }

  private getTrailersData(data: any) {
    return data.map(trailer => {
      trailer.results = trailer.results.filter(
        (result, index, arr) => index === arr.findIndex(item => item === result)
      );
      return trailer;
    });
  }
  getAll() {
    return this.getAllFromJson();
  }
}
