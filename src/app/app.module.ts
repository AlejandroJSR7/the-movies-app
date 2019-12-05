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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainNavigationComponent,
    TopFiveMoviesComponent,
    TopMoviesOfAllTimeComponent,
    AddNewMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
