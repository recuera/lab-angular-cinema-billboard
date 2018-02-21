import { Component, OnInit } from '@angular/core';
import { moviesService } from 'services/movies.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies:any;
  constructor(public movieService:moviesService,public router:Router) {
    this.movies = this.movieService.getMovies()
   }

  ngOnInit() {
    console.log(this.movies)
  }

  goToMovie(id){
    console.log(id)
    this.router.navigate(['/movie',id]); 
  }

}
