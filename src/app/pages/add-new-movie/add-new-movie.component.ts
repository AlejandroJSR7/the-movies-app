import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-add-new-movie',
  templateUrl: './add-new-movie.component.html',
  styleUrls: ['./add-new-movie.component.scss']
})
export class AddNewMovieComponent implements OnInit {

  MovieForm: FormGroup;

  constructor(
    public builder: FormBuilder,
    private router: Router,
    public moviesService: MoviesService
  ) {
    this.MovieForm = this.builder.group({
      filmTitle: [null, Validators.required],
      filmRelease: [null, Validators.required],
      filmDescription: [null, Validators.required],
      filmPicture: [null]
    });
  }

  ngOnInit() {
  }

  addNewMovie(formNewMovie: any) {
    if (formNewMovie.status === 'VALID') {
      const formData = this.MovieForm.getRawValue();
      this.moviesService.addMovie(formData);
      this.router.navigate(['home']);
    }
    return false;
  }

}
