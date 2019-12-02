import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { JoinPipe } from './pipes/join/join.pipe';
import { LoaderService } from './services/loader/loader.service';
import { StoreService } from './services/store/store.service';
import { FilmService } from './services/film/film.service';
import appRoutes from './app.routes';

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
    PieChartComponent,
    JoinPipe,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'}),
    HttpClientModule,
    AngularSvgIconModule,
    ChartsModule,
  ],
  providers: [
    LoaderService,
    StoreService,
    FilmService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
