import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopFiveMoviesComponent } from './pages/top-five-movies/top-five-movies.component';
import { TopMoviesOfAllTimeComponent } from './pages/top-movies-of-all-time/top-movies-of-all-time.component';
import { AddNewMovieComponent } from './pages/add-new-movie/add-new-movie.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'top-five-movies', component: TopFiveMoviesComponent },
  { path: 'top-movies-of-all-time', component: TopMoviesOfAllTimeComponent },
  { path: 'add-new-movie', component: AddNewMovieComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
