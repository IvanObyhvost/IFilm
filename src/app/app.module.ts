import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { TopFilmsComponent } from './pages/top-films/top-films.component';
import { CardFilmComponent } from './components/card-film/card-film.component';
import { FavoriteFilmsComponent } from './pages/favorite-films/favorite-films.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CardFilmListComponent } from './components/card-film-list/card-film-list.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'top', component: TopFilmsComponent, pathMatch:'full'},
  { path: 'decades', component: TopFilmsComponent, pathMatch:'full'},
  { path: 'favorite', component: FavoriteFilmsComponent, pathMatch:'full' },
  { path: '**', redirectTo: '/top'}
]


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TopFilmsComponent,
    CardFilmComponent,
    FavoriteFilmsComponent,
    LoaderComponent,
    CardFilmListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AngularSvgIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
