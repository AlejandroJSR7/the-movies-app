import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieModel } from '../../models/movie.model';
import { DataService } from 'src/app/services/sharing-data.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  listMovies: MovieModel[];

  constructor(
    public MovieService: MoviesService,
    public dataService: DataService

  ) { }

  ngOnInit() {
    this.listMovies = this.MovieService.getMovies();
  }

  selectMovie(theMovie: MovieModel) {
    console.log('Selected: ', theMovie);
    this.dataService.changeMessage(theMovie);
  }

}
