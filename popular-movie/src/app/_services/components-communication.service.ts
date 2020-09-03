import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentsCommunicationService {

  searchBoxSubject = new Subject();
  public searchBoxObj = this.searchBoxSubject.asObservable();

  openMovieSubject = new Subject();
  public openMovieObj = this.openMovieSubject.asObservable();

  constructor() { }

  changeSearchBox(data) {
    this.searchBoxSubject.next(data);
  }

  changeOpenMovie(data) {
    this.openMovieSubject.next(data);
  }
}
