import { Film } from "../interfaces";
import { mapToDirector } from "./director.mapper";
import { mapToTrailer } from "./trailer.mapper";
import { mapArrayToMapper } from "./utils.mapper";

export function mapToFilm(data: any): Film {
  return {
    idIMDB: data.idIMDB,
    title: data.title,
    countries: data.countries ?? [],
    year: data.year,
    rating: data.rating,
    urlPoster: data.urlPoster,
    genres: data.genres ?? [],
    directors: mapArrayToMapper(data.directors, mapToDirector),
    trailers: mapArrayToMapper(data.trailers, mapToTrailer),
    isFavorite: data.favorite ?? false,
  };
}
