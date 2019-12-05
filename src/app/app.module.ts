import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { MainNavigationComponent } from './components/main-navigation/main-navigation.component';
import { TopFiveMoviesComponent } from './pages/top-five-movies/top-five-movies.component';
import { TopMoviesOfAllTimeComponent } from './pages/top-movies-of-all-time/top-movies-of-all-time.component';
import { AddNewMovieComponent } from './pages/add-new-movie/add-new-movie.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';

import { MoviesService } from './services/movies.service';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavigationComponent,
    TopFiveMoviesComponent,
    TopMoviesOfAllTimeComponent,
    AddNewMovieComponent,
    MoviesListComponent,
    MovieItemComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
