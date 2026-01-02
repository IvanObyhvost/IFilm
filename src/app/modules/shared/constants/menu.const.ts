import { MenuItem } from "../interfaces";
import { ROUTE_URLS } from "./route-urls.const";

export const MENU: Record<string, MenuItem> = {
  top: {
    name: "Top 20 films",
    link: ROUTE_URLS.top,
  },
  decades: {
    name: "Films for decades",
    link: ROUTE_URLS.decades,
  },
  favorite: {
    name: "Favorite films",
    link: ROUTE_URLS.favorite,
  },
};
