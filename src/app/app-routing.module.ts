import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MoviesComponent} from "./components/moviesList/movies/movies.component";
import {GenresComponent} from "./components/genresList/genres/genres.component";
import {MovieDetailsComponent} from "./components/moviesList/movie-details/movie-details.component";

const routes: Routes = [
  {path: 'getMovies', component: MoviesComponent},
  {path: 'getMovies/:id', component: MovieDetailsComponent},
  {path: 'getGenres', component: GenresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
