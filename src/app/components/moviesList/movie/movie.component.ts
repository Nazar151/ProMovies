import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {Movie} from "../../interface/Movie";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

 @Input()
  movie: Movie
  imageUrl = 'https://image.tmdb.org/t/p/w1280';

  constructor( private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToDetails(): void {
this.router.navigate([this.movie.id],{relativeTo: this.activatedRoute, state: this.movie})
  }
}
