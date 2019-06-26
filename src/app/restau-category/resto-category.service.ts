import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RestoCategory } from './resto-category';
import { handleError } from '../utils/log-error';
import { combineLatest, Observable, ReplaySubject, throwError } from 'rxjs';
import { catchError, filter, map, mergeMap, shareReplay, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class RestoCategoryService {

categoriyUrl = 'api/categoriesResto'
  constructor(private http: HttpClient) { }

 categoryResto$ = this.http.get<RestoCategory[]>(this.categoriyUrl)
    .pipe(
      tap(data => console.log('getProducts with category: ', JSON.stringify(data))),
      shareReplay(),
      catchError(handleError)
    );

}