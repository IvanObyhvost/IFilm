import { Injectable } from '@angular/core';
import { of  } from 'rxjs';
import { take, toArray, delay, map } from 'rxjs/operators';
import { Film } from 'src/app/models/film/film';
import data from './data';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor() { }
  get(limit: number) {
    const response = of(data);
    return response.pipe(
      delay(1000),
      map((response: any) => {
        return response.data.movies.map((film: any) => {
          film.isFavorite = false;
          return film;
        });
      }
      )
    )
  }
}


// const data = of(
//   {
//     id: 1,
//     title: 'Агент Джонни Инглиш 3.0',
//     year: 2018,
//     rate: 7.9,
//     country: 'Великобритания',
//     genre: 'Драмы',
//     director: 'Bfydyf bydyfys',
//     imageUrl: 'https://thumbs.dfs.ivi.ru/storage4/contents/7/4/9781921cce4647dad6184f056d8b6e.jpg/140x215/'
//   },
//   {
//     id: 2,
//     title: 'Зеленая книга',
//     year: 2007,
//     rate: 9.1,
//     country: 'США',
//     genre: 'Комедии',
//     director: 'Bdfy FYydf',
//     imageUrl: 'https://thumbs.dfs.ivi.ru/storage32/contents/d/b/c72516e5e3a696a49e49c2901ccb1a.jpg/140x215/'
//   },
//   {
//     id: 3,
//     title: 'Агент Джонни Инглиш',
//     year: 2008,
//     rate: 7.9,
//     country: 'Великобритания',
//     genre: 'Драмы',
//     director: 'Bfydyf bydyfys',
//     imageUrl: 'https://thumbs.dfs.ivi.ru/storage4/contents/7/4/9781921cce4647dad6184f056d8b6e.jpg/140x215/'
//   },
//   {
//     id: 4,
//     title: 'Зеленая книга',
//     year: 2017,
//     rate: 9.1,
//     country: 'США',
//     genre: 'Комедии',
//     director: 'Bdfy FYydf',
//     imageUrl: 'https://thumbs.dfs.ivi.ru/storage32/contents/d/b/c72516e5e3a696a49e49c2901ccb1a.jpg/140x215/'
//   },
//   {
//     id: 5,
//     title: 'Зеленая книга',
//     year: 2017,
//     rate: 9.1,
//     country: 'США',
//     genre: 'Комедии',
//     director: 'Bdfy FYydf',
//     imageUrl: 'https://thumbs.dfs.ivi.ru/storage32/contents/d/b/c72516e5e3a696a49e49c2901ccb1a.jpg/140x215/'
//   },
// )
