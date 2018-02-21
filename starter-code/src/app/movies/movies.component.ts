import { Component, OnInit } from '@angular/core';
import { moviesService } from 'services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies:any;
  constructor(public movieService:moviesService) {
    this.movies = this.movieService.getMovies()
   }

  ngOnInit() {
    console.log(this.movies)
  }

}
