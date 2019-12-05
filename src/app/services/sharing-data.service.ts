import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private movieSource = new BehaviorSubject(null);
  currentMovie = this.movieSource.asObservable();

  constructor() { }

  changeMessage(movie: any) {
    this.movieSource.next(movie);
  }

}
