import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { Movie } from '../../interface/Movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie
  imageUrl = 'https://image.tmdb.org/t/p/w1280';

  constructor( private router : Router, private activatedRoute : ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.movie = this.router.getCurrentNavigation()?.extras.state as Movie
    })
  }

  ngOnInit(): void {
  }

}
