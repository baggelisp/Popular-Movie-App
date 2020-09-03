import { Component, OnInit } from '@angular/core';
import { ComponentsCommunicationService} from '../../_services/components-communication.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private componentsCommunication: ComponentsCommunicationService) { }

  ngOnInit(): void {
  }

  changeInput(text){
    this.componentsCommunication.changeSearchBox(text);
  }
}
