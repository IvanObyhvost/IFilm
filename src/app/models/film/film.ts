export class Film {
    ranking: number;
    title: string;
    year: number;
    rating: number;
    countries: string[];
    urlPoster: string;
    genres: string[];
    directors: [{
        id: string;
        name: string;
    }];
    isFavorite: boolean;
}