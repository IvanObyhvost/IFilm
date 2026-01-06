import { Director } from "../interfaces";

export function mapToDirector(data: any): Director {
  return {
    id: data.id,
    name: data.name,
  };
}
