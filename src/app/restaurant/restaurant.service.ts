import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from './restaurant';
import { handleError } from '../utils/log-error';
import { combineLatest, Observable, ReplaySubject, throwError } from 'rxjs';
import { catchError, filter, map, mergeMap, shareReplay, switchMap, tap } from 'rxjs/operators';
import { RestoCategoryService } from '../restau-category/resto-category.service';

@Injectable()
export class RestaurantService {
  restauUrl = 'api/restaurants'
  constructor(private http: HttpClient, private categoryService: RestoCategoryService) { }

  restaurants$ = this.http.get<Restaurant[]>(this.restauUrl)
    .pipe(
      tap(data => console.log('getProducts: ', JSON.stringify(data))),
      shareReplay(),
      catchError(handleError)
    );

  restauWithCategory$ = combineLatest(
    this.restaurants$,
    this.categoryService.categoryResto$
  ).pipe(
    map(([products, categories]) => {
      products.map( p => (
        {...p, category : categories.find(c => p.categoryId == c.id).name 
      } as Restaurant))
    }),
    shareReplay()
  );
  

  private handleError(err) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
    }
    console.error(err);
    return throwError(errorMessage);
  }

}