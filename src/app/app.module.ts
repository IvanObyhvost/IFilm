import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { TopFilmsComponent } from './pages/top-films/top-films.component';
import { CardFilmComponent } from './components/card-film/card-film.component';
import { FavoriteFilmsComponent } from './pages/favorite-films/favorite-films.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CardFilmListComponent } from './components/card-film-list/card-film-list.component';
import { HttpClientModule } from '@angular/common/http';
import { DecadesFilmsComponent } from './pages/decades-films/decades-films.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';

const appRoutes: Routes = [
  { path: 'top', component: TopFilmsComponent, pathMatch:'full'},
  { path: 'decades', component: DecadesFilmsComponent, pathMatch:'full'},
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
    CardFilmListComponent,
    DecadesFilmsComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    AngularSvgIconModule,
    ChartsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
