import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Input() MovieItem: MovieModel;
  @Input() isTopFive = false;

  constructor(
    public MovieService: MoviesService
  ) { }

  ngOnInit() {
  }
  deleteMovie(movieToDelete) {
    if (confirm('Are you sure you want to delete it?')) {
      this.MovieService.deleteMovie(movieToDelete);
    }
  }

}
