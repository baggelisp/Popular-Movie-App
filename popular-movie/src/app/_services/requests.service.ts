import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiUrl , apiKey, searchUrl} from '../../config/constants';
import { MoviesResponse, TrailerRes, MovieDetails } from '../_models/interfaces';

@Injectable({
  	providedIn: 'root'
})
export class RequestsService {

	constructor(private http: HttpClient) {
	}

	getAllMovies(): Observable<MoviesResponse> {
		return this.http.get<MoviesResponse>(`${apiUrl}popular?api_key=${apiKey}`);
	}

	getMovieDetails(id: number): Observable<MovieDetails> {
		return this.http.get<any>(`${apiUrl}${id}?api_key=${apiKey}`)
	}

	searchMovie(query: string): Observable<MoviesResponse> {
		return this.http.get<any>(searchUrl + query)
	}

	getMovieTrailer(id: number): Observable<TrailerRes> {
	return this.http.get<any>(`${apiUrl}${id}/videos?api_key=${apiKey}`)
	}

}
