import { Trailer } from "../interfaces";

export function mapToTrailer(data: any): Trailer {
  return {
    size: data.size,
    link: data.link,
  };
}
