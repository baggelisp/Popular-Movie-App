import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../../../_services/requests.service';
import { MoviesResponse, Movie } from '../../../_models/interfaces';
import { ComponentsCommunicationService} from '../../../_services/components-communication.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies = [];
  selectedMovieId;

  constructor( private comp_comm: ComponentsCommunicationService,  private requestsService: RequestsService) { }

  ngOnInit(): void {

    this.comp_comm.searchBoxObj.subscribe(data => {
      console.log(data);
    });

    this.requestsService.getAllMovies().subscribe( (res: MoviesResponse) => {
      this.movies = [...res.results];
    });
  }

  clickMovie(movie: Movie){
    this.comp_comm.changeOpenMovie(movie);
    this.selectedMovieId = movie.id;
  }
}
