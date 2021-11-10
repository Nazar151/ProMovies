import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from 'rxjs';
import {Movie} from "../interface/Movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movieUrl = 'https://api.themoviedb.org/3/discover/movie'
  public imageUrl = 'https://image.tmdb.org/t/p/w1280'
  private apiKey = 'api_key=6dc6bceee2d247207bc6feafe7d9066a'

  constructor(private httpClient : HttpClient) { }

  getMovies(): Observable<Movie[]>{
    return this.httpClient.get<Movie[]>(this.movieUrl + '?' + this.apiKey, {
      headers: new HttpHeaders({
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZGM2YmNlZWUyZDI0NzIwN2JjNmZlYWZlN2Q5MDY2YSIsInN1YiI6IjYxN2JjMWUwNWFiYTMyMDAyOTUwNmJhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FXlZPJCR8IwytZ4a6AOthPGrgwlsORbo1-cETTdWSiM'
      })
    })
  }

}
