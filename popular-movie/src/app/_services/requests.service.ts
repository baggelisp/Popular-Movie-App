import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import { apiUrl , apiKey, search} from '../../config/constants';
import { MoviesResponse } from '../_models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) {
  }

  getAllMovies(): Observable<MoviesResponse> {
    return this.http.get<MoviesResponse>(`${apiUrl}popular?api_key=${apiKey}`);
  }

    // Movie details
    getMovieDetails(id: number): Observable<any> {
      return this.http.get<any>(`${apiUrl}${id}?api_key=${apiKey}`)
    }
  
    // Movie search
    searchMovie(query: string): Observable<any> {
      return this.http.get<any>(search + query)
    }
  
}
