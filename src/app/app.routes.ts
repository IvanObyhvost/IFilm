import { Routes } from "@angular/router";
import { TopFilmsComponent } from './pages/top-films/top-films.component';
import { DecadesFilmsComponent } from './pages/decades-films/decades-films.component';
import { FavoriteFilmsComponent } from './pages/favorite-films/favorite-films.component';

const appRoutes: Routes = [
    { path: 'top', component: TopFilmsComponent, pathMatch: 'full' },
    { path: 'decades', component: DecadesFilmsComponent, pathMatch: 'full' },
    { path: 'favorite', component: FavoriteFilmsComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '/top' }
];
export default appRoutes;
