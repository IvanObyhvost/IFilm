import { Director } from './director';
import { Trailer } from './trailer';

export class Film {
    idIMDB: string;
    ranking: number;
    title: string;
    year: number;
    rating: number;
    countries: string[];
    urlPoster: string;
    genres: string[];
    directors: Director[];
    isFavorite: boolean;
    trailers: Trailer[];
}
