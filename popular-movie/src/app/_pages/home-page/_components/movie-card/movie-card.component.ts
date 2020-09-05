import { Component, OnInit } from '@angular/core';
import { ComponentsCommunicationService} from '../../../../_services/components-communication.service';
import { RequestsService } from '../../../../_services/requests.service';
import { Movie, MovieDetails } from '../../../../_models/interfaces';
import { VideoModalComponent } from '../../../../_shared/_components/video-modal/video-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

	movie: MovieDetails;
	currentRate: number;
	randomMovie = true;

	constructor(private modalService: NgbModal,  private comp_comm: ComponentsCommunicationService, private requestsService: RequestsService) { }
	destroy: Subject<boolean> = new Subject<boolean>();

	ngOnInit(): void {
		this.comp_comm.openMovieObj.pipe(takeUntil(this.destroy)).subscribe( (data: Movie) => {
			this.getMovie(data.id);
			this.randomMovie = false;
		});
	}

	goToLink(url: string){
		window.open(url, '_blank');
	}

	getMovie(id: number){
		this.requestsService.getMovieDetails(id).pipe(takeUntil(this.destroy)).subscribe( (res: MovieDetails) => {
			this.movie = res;
			this.currentRate = res.vote_average / 2;
		});
	}

	openTrailer(movie: Movie){
		const modalRefErr = this.modalService.open(VideoModalComponent);
		modalRefErr.componentInstance.movieId = movie.id;
	}

	ngOnDestroy() {
		this.destroy.next(true);
		this.destroy.unsubscribe();
	}
}
