import { Component } from '@angular/core';
import { ComponentsCommunicationService } from './_services/components-communication.service';
import { Movie } from './_models/interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	destroy: Subject<boolean> = new Subject<boolean>();
	movieIsSelected = false;

	constructor(private componentsCommunication: ComponentsCommunicationService){
		this.componentsCommunication.openMovieObj.pipe(takeUntil(this.destroy)).subscribe( (data: Movie) => {
			this.movieIsSelected = true;
		});
	}

	ngOnDestroy() {
		this.destroy.next(true);
		this.destroy.unsubscribe();
	}
}
