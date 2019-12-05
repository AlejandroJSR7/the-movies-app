import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieModel } from '../../models/movie.model';
import { DataService } from 'src/app/services/sharing-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listMovies: MovieModel[];
  weHaveMovies = false;
  selectedMovie: MovieModel;

  constructor(
    public MovieService: MoviesService,
    public dataService: DataService
  ) { }

  ngOnInit() {
    this.listMovies = this.MovieService.getMovies();
    this.dataService.currentMovie.subscribe((movieSelected: any) => {
      this.selectedMovie = movieSelected;
    });
    if (this.listMovies.length <= 0) {
      this.weHaveMovies = true;
    }
  }

}
