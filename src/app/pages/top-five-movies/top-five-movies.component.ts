import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { MovieModel } from 'src/app/models/movie.model';

@Component({
  selector: 'app-top-five-movies',
  templateUrl: './top-five-movies.component.html',
  styleUrls: ['./top-five-movies.component.scss']
})
export class TopFiveMoviesComponent implements OnInit {

  listMovies: any = [];
  constructor(private api: MoviesService) { }

  ngOnInit() {
    this.getMovies();
  }
  getMovies() {
    this.api.getTopFive()
      .subscribe(data => {
        for (const movie of (data['movies'] as any)) {
          this.listMovies.push({
            filmTitle: movie.title,
            filmRelease: movie.release,
            filmDescription: movie.description,
            filmPicture: movie.image
          });
        }
      });
  }

}
