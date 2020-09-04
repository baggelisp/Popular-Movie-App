import { Component, OnInit } from '@angular/core';
import { ComponentsCommunicationService} from '../../_services/components-communication.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  destroy: Subject<boolean> = new Subject<boolean>();
  
  constructor(private componentsCommunication: ComponentsCommunicationService) { }

  ngOnInit(): void {
  }

  changeInput(text){
    this.componentsCommunication.changeSearchBox(text);
  }

  ngOnDestroy() {
		this.destroy.next(true);
		this.destroy.unsubscribe();
	}
}
