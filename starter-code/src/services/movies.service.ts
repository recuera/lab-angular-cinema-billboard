import { Injectable } from "@angular/core";
import { sampleMovies } from "../sample-movies"

export interface Movie {
  id:number,
  title:string,
  poster:string,
  synopsis:string,
  genres:Array<string>,
  year:number,
  director:string,
  actors:Array<string>,
  hours:Array<string>,
  room:number
}

@Injectable()
export class moviesService{
  movies:Array<Movie> = sampleMovies;

  getMovies(){
    return this.movies;
  }
  getMovie(id){
    this.movies.forEach(m => {
      if(m.id = id){
        return m;
      }
    })
    console.log(`No movie found with id: ${id}`)
  }
}