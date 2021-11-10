import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { MoviesComponent } from './components/moviesList/movies/movies.component';
import { MovieComponent } from './components/moviesList/movie/movie.component';
import { MovieDetailsComponent } from './components/moviesList/movie-details/movie-details.component';
import {HttpClientModule} from "@angular/common/http";
import { GenresComponent } from './components/genresList/genres/genres.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    MovieDetailsComponent,
    GenresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
