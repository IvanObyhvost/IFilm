import { Film } from 'src/app/models/film/film';
import { BehaviorSubject } from 'rxjs';

export interface IStore {
    films: Film[];
    films$: BehaviorSubject<Film[]>;
    favoriteFilmsIds: string[];
    favoriteFilmsIds$: BehaviorSubject<string[]>;
    getFavoriteFilms();
    setFavoriteFilms(idIMDBs: string[]);
    getFilms();
    setFilms(films: Film[]);
    toggleFavoriteFilm(idIMDB: string);
}
