import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { TopFilmsComponent } from './pages/top-films/top-films.component';
import { CardFilmComponent } from './components/card-film/card-film.component';
import { FavoriteFilmsComponent } from './pages/favorite-films/favorite-films.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TopFilmsComponent,
    CardFilmComponent,
    FavoriteFilmsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
