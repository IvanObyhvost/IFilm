import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import trailers from 'src/assets/data/trailers.json';
import { of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders()
};

@Injectable({
  providedIn: 'root'
})
export class TrailerService {

  constructor(private http: HttpClient) { }

  getAll() {
    return of(trailers).pipe(
      map((response: any) => {
        let {data} = response;
        return data.map(trailer => {
          trailer.results = trailer.results.filter((result, index, arr) => index === arr.findIndex(item => item === result));
          return trailer;
        })
      })
    )
  }
  getTrailer(title: string) {
    httpOptions.headers.set('Origin', '')
    return this.http.get(`https://cors-anywhere.herokuapp.com/${environment.api}tmdb/searchMovie?movieName=${title}&token=${environment.token}&format=json`, httpOptions)
  }
}