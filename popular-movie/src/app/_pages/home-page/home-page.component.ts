import { Component, OnInit } from '@angular/core';
import { ComponentsCommunicationService } from '../../_services/components-communication.service';
import { Movie } from '../../_models/interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-home-page',
	templateUrl: './home-page.component.html',
	styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

	destroy: Subject<boolean> = new Subject<boolean>();
	movieIsSelected = false;

	constructor(private componentsCommunication: ComponentsCommunicationService){
		this.componentsCommunication.openMovieObj.pipe(takeUntil(this.destroy)).subscribe( (data: Movie) => {
			this.movieIsSelected = true;
		});
	}
	
	ngOnInit(): void {

	}

	ngOnDestroy() {
		this.destroy.next(true);
		this.destroy.unsubscribe();
	}

}
