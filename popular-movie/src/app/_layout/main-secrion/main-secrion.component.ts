import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-main-secrion',
	templateUrl: './main-secrion.component.html',
	styleUrls: ['./main-secrion.component.scss']
})
export class MainSecrionComponent implements OnInit {

	destroy: Subject<boolean> = new Subject<boolean>();
	
	constructor() { }

	ngOnInit(): void {
	}

	ngOnDestroy() {
		this.destroy.next(true);
		this.destroy.unsubscribe();
	}
}
