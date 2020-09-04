import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Movie } from '../_models/interfaces';

@Injectable({
	providedIn: 'root'
})
export class ComponentsCommunicationService {

	searchBoxSubject = new Subject();
	public searchBoxObj = this.searchBoxSubject.asObservable();

	openMovieSubject = new Subject();
	public openMovieObj = this.openMovieSubject.asObservable();

	constructor() { }

	changeSearchBox(data: string) {
		this.searchBoxSubject.next(data);
	}

	changeOpenMovie(data: Movie) {
		this.openMovieSubject.next(data);
	}
}
