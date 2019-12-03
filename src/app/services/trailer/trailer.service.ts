import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders()
};

@Injectable({
  providedIn: 'root'
})
export class TrailerService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('/assets/data/trailers.json').pipe(
      map((response: any) => response.data)
    )
  }
  getTrailer(title: string) {
    httpOptions.headers.set('Origin', '')
    return this.http.get(`https://cors-anywhere.herokuapp.com/${environment.api}tmdb/searchMovie?movieName=${title}&token=${environment.token}&format=json`, httpOptions)
  }
}
