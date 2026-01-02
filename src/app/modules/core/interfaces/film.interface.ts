import { IDirector } from "./director.interface";
import { ITrailer } from "./trailer.interface";

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
  directors: IDirector[];
  isFavorite: boolean;
  trailers: ITrailer[];
}
