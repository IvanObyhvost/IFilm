import { IStore } from 'src/app/interfaces/store/IStore';
import { Film } from '../film/film';
import { BehaviorSubject, of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';

export class Store implements IStore {
    films: Film[] = [];
    films$ = new BehaviorSubject<Film[]>([]);
    favoriteFilmsIds: string[] = [];
    favoriteFilmsIds$ = new BehaviorSubject<string[]>([]);

    getFavoriteFilms() {
        return this.favoriteFilmsIds$.pipe(
            switchMap(() => this.films$),
            map(films => films.filter(film => this.favoriteFilmsIds.includes(film.idIMDB))),
            map(films => films.filter(film => film.isFavorite)),
            catchError(err => of([]))
        );
    }
    setFavoriteFilms(idIMDBs: string[]) {
        this.favoriteFilmsIds = idIMDBs;
        this.favoriteFilmsIds$.next(idIMDBs);
    }
    getFilms() {
        return this.films$;
    }
    setFilms(films: Film[]) {
        this.films = films;
        this.films$.next(films);
    }
    toggleFavoriteFilm(idIMDB: string) {
        const selectedFilm = this.films.find(film => film.idIMDB === idIMDB);
        if (selectedFilm) {
            const favoriteFilmId = this.favoriteFilmsIds.find(id => id === idIMDB);
            let favoriteFilmsIds = [...this.favoriteFilmsIds];
            if (favoriteFilmId) {
                selectedFilm.isFavorite = false;
                favoriteFilmsIds = favoriteFilmsIds.filter(id => id !== idIMDB);
            } else {
                selectedFilm.isFavorite = true;
                favoriteFilmsIds = [...favoriteFilmsIds, selectedFilm.idIMDB];
            }
            this.setFavoriteFilms(favoriteFilmsIds);
        }
    }
}
