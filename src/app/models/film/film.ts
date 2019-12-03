export class Film {
    idIMDB: string;
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
    trailers: [{
        size: number;
        link: string;
    }]
}