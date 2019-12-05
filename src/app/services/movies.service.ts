import { Injectable } from '@angular/core';
import { MovieModel } from '../models/movie.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesList: MovieModel[];
  public URL_API = 'http://www.mocky.io/v2/5dc3c053300000540034757b';
  constructor(
    private http: HttpClient
  ) {
    this.moviesList = [];
  }

  addMovie(newMovie: MovieModel) {
    this.moviesList.push(newMovie);
    let movies: MovieModel[] = [];
    if (localStorage.getItem('ls_the_movies') === null) { // If localStorage hasn't items
      movies.push(newMovie)
      localStorage.setItem('ls_the_movies', JSON.stringify(movies))
    } else { // If localStorage has items
      movies = JSON.parse(localStorage.getItem('ls_the_movies')); // get the items and save at this list
      movies.push(newMovie); // push the new at this list
      localStorage.setItem('ls_the_movies', JSON.stringify(movies)) // and send again to the localStorage
    }
    return false;
  }
  getMovies() {
    if (localStorage.getItem('ls_the_movies') === null) {
      return this.moviesList;
    } else {
      this.moviesList = JSON.parse(localStorage.getItem('ls_the_movies'));
      return this.moviesList;
    }
  }
  deleteMovie(movieToDelete: MovieModel) {
    for (let i = 0; i < this.moviesList.length; i++) {
      if (movieToDelete === this.moviesList[i]) {
        this.moviesList.splice(i, 1);
        localStorage.setItem('ls_the_movies', JSON.stringify(this.moviesList));
      }
    }
  }

  getTopFive() {
    return this.http.get(this.URL_API);
  }

}
