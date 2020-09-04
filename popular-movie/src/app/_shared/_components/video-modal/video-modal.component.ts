import { Component, Input ,Output ,OnDestroy , EventEmitter, OnInit} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { RequestsService } from '../../../_services/requests.service';
import { takeUntil } from 'rxjs/operators';
import { TrailerRes } from 'src/app/_models/interfaces';

@Component({
	selector: 'app-video-modal',
	templateUrl: './video-modal.component.html',
	styleUrls: ['./video-modal.component.scss']
})
export class VideoModalComponent implements OnInit,OnDestroy {
	destroy: Subject<boolean> = new Subject<boolean>();
	@Input() movieId;
	url: string;
	dataReady = false;

	constructor(private requestsService: RequestsService, public activeModal: NgbActiveModal , private router: Router) {}

	ngOnInit() {
		this.requestsService.getMovieTrailer(this.movieId).pipe(takeUntil(this.destroy)).subscribe( (res: TrailerRes) => {
			this.dataReady = true;
			if (res.results.length === 0){
				return
			}
			this.url = 'https://www.youtube.com/embed/' + res.results[0].key
		})
	}

	ngOnDestroy() {
		this.destroy.next(true);
		this.destroy.unsubscribe();
	}
}
