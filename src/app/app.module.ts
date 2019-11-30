import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { TopFilmsComponent } from './pages/top-films/top-films.component';
import { CardFilmComponent } from './components/card-film/card-film.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TopFilmsComponent,
    CardFilmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
