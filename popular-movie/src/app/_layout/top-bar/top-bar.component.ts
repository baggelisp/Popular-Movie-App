import { Component, OnInit } from '@angular/core';
import { ComponentsCommunicationService} from '../../_services/components-communication.service';
import { pageTitle } from '../../../config/constants'

@Component({
	selector: 'app-top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

	public get pageTitle() : string {
		return pageTitle
	}

	constructor(private componentsCommunication: ComponentsCommunicationService) { }

	ngOnInit(): void {
	}

	changeInput(text: string){
		this.componentsCommunication.changeSearchBox(text);
	}

}
