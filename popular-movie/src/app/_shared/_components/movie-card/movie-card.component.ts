import { Component, OnInit } from '@angular/core';
import { ComponentsCommunicationService} from '../../../_services/components-communication.service';
import { RequestsService } from 'src/app/_services/requests.service';
import { Movie, MovieDetails } from '../../../_models/interfaces';
import { timer } from 'rxjs';
import { take, takeWhile } from 'rxjs/operators';
import { interval } from 'rxjs';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {

  movie: MovieDetails;
  currentRate;
  randomMovie = true;

  
  constructor(private comp_comm: ComponentsCommunicationService, private requestsService: RequestsService) { }

  ngOnInit(): void {
    this.comp_comm.openMovieObj.subscribe( (data: Movie) => {
      this.getMovie(data.id);
      this.randomMovie = false;
    });
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

  getMovie(id){
    this.requestsService.getMovieDetails(id).subscribe( (res: MovieDetails) => {
      this.movie = res;
      this.currentRate = res.vote_average / 2;
      console.log(res)
    });
  }
}
