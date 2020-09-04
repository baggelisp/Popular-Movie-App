import { Component } from '@angular/core';
import { ComponentsCommunicationService } from './_services/components-communication.service';
import { Movie } from './_models/interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  movieIsSelected = false;

  constructor(private componentsCommunication: ComponentsCommunicationService){
    this.componentsCommunication.openMovieObj.subscribe( (data: Movie) => {
      this.movieIsSelected = true;
    });
  }
}
