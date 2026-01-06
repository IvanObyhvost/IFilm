import { Director } from "./director.interface";
import { Trailer } from "./trailer.interface";

export interface Film {
  idIMDB: string;
  title: string;
  year: string;
  rating: string;
  countries: string[];
  urlPoster: string;
  genres: string[];
  directors: Director[];
  isFavorite: boolean;
  trailers: Trailer[];
}
