import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	destroy: Subject<boolean> = new Subject<boolean>();
	
	constructor() { }

	ngOnInit(): void {
	}

	ngOnDestroy() {
		this.destroy.next(true);
		this.destroy.unsubscribe();
	}

}
