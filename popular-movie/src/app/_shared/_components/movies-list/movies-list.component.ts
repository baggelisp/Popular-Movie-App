import { Component, OnInit, HostListener } from '@angular/core';
import { RequestsService } from '../../../_services/requests.service';
import { MoviesResponse, Movie } from '../../../_models/interfaces';
import { ComponentsCommunicationService} from '../../../_services/components-communication.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-movies-list',
	templateUrl: './movies-list.component.html',
	styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
	destroy: Subject<boolean> = new Subject<boolean>();
	movies: Movie[] = [];
	selectedMovieId: number;
	mobileView: boolean;

	@HostListener('window:resize', ['$event'])
	resize(event) {
		if (window.innerWidth > 576) {
			this.mobileView = false;
		} else {
			this.mobileView = true;
		}
	}

	constructor( private comp_comm: ComponentsCommunicationService,  private requestsService: RequestsService) {
		if (window.innerWidth > 576) {
			this.mobileView =  false;
		} else {
			this.mobileView =  true;
		}
	}

	ngOnInit(): void {
		this.onSearchBoxChanges();
		this.getPopularMovies();
	}

	getPopularMovies(){
		this.requestsService.getPopularMovies().pipe(takeUntil(this.destroy)).subscribe( (res: MoviesResponse) => {
			this.movies = [...res.results];
		});
	}

	clickMovie(movie: Movie) {
		this.comp_comm.changeOpenMovie(movie);
		this.selectedMovieId = movie.id;
	}

	onSearchBoxChanges(){
		this.comp_comm.searchBoxObj.pipe(takeUntil(this.destroy)).subscribe((data: string) => {
			if (data === ''){
			this.getPopularMovies();
			return;
			}
			this.requestsService.searchMovie(data).pipe(takeUntil(this.destroy)).subscribe((res: MoviesResponse) => {
			this.movies = [...res.results];
			});
		});
	}

	backButton(){
		this.selectedMovieId = null;
	}

	ngOnDestroy() {
		this.destroy.next(true);
		this.destroy.unsubscribe();
	}
}
