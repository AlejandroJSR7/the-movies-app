import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  listMovies: MovieModel[];

  constructor(
    public MovieService: MoviesService
  ) { }

  ngOnInit() {
    this.listMovies = this.MovieService.getMovies();
  }

  selectMovie(theMovie: MovieModel) {
    console.log('Selected: ', theMovie)
  }

}
