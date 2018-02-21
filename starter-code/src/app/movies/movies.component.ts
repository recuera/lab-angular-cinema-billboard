import { Component, OnInit, Input } from '@angular/core';
import { moviesService } from 'services/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  id:number;
  movie:any;
  constructor(public movieService:moviesService,public route:ActivatedRoute) {
    this.route.params.subscribe( p => {
      this.id = p.id;
    })
  }

  ngOnInit() {
    this.movie = this.movieService.getMovie(this.id),
    console.log(this.movie)
  }
}
