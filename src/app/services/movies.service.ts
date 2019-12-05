import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  moviesList: MovieModel[];

  constructor() {
    this.moviesList = [];
  }

  addMovie(newMovie: MovieModel) {
    this.moviesList.push(newMovie);
    let movies: MovieModel[] = [];
    if (localStorage.getItem('ls_the_movies') === null) { // If localstorage hasn't items
      movies.push(newMovie)
      localStorage.setItem('ls_the_movies', JSON.stringify(movies))
    } else { // If localStorage has items
      movies = JSON.parse(localStorage.getItem('ls_the_movies')); // get the items and save at this list
      movies.push(newMovie); // push the new at this list
      localStorage.setItem('ls_the_movies', JSON.stringify(movies)) // and send again to the localStorage
    }
    return false;
  }

}
