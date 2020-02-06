import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IReport } from '../models/report';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  private productUrl = 'api/temp/template.json';
  private textUrl = 'api/text.json';

  constructor( private http: HttpClient ) { }



  getReports(): Observable<IReport[]> {
    return this.http.get<IReport[]>(this.productUrl)
      .pipe(
        // tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getText(): Observable<any> {
    return this.http.get<IReport[]>(this.textUrl)
      .pipe(
        // tap(data => console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
