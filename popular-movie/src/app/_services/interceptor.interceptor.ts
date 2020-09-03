import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse , HttpResponse} from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { tap, retry , catchError} from 'rxjs/operators';

@Injectable()
export class MyInterceptorService implements HttpInterceptor {

  private cache = new Map<string, any>();

    constructor() {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


      const cachedResponse = this.cache.get(request.url);
      if (cachedResponse) {
        return of(cachedResponse);
      }

      return next.handle(request).pipe(
        retry(2),
        catchError((error: HttpErrorResponse) => {
          console.log(error);
          return throwError(error);
        }),
        tap(event => {
          if (event instanceof HttpResponse) {
            this.cache.set(request.url, event);
          }
        })
      );
    }
}