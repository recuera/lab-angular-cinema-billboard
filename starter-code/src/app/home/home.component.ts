import { Component, OnInit } from '@angular/core';
import { moviesService } from 'services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies:any;
  constructor(public movieService:moviesService) {
    this.movies = this.movieService.getMovies()
   }

  ngOnInit() {
    console.log(this.movies)
  }

}
