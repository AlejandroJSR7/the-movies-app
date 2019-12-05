import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listMovies: MovieModel[];
  weHaveMovies = false;

  constructor(
    public MovieService: MoviesService
  ) { }

  ngOnInit() {
    this.listMovies = this.MovieService.getMovies();
    if (this.listMovies.length <= 0) {
      this.weHaveMovies = true;
    }
  }

}
