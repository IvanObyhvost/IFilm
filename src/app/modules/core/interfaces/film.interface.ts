export interface IFilm {
  idIMDB: string;
  ranking: number;
  title: string;
  year: string;
  releaseDate: string;
  rating: string;
  countries: string[];
  urlPoster: string;
  genres: string[];
  writers: {
    id: string;
    name: string;
  }[];
  runtime: string;
  directors: {
    id: string;
    name: string;
  }[];
  isFavorite: boolean;
  trailers: {
    size: number;
    link: string;
    key?: string;
  }[];
}
