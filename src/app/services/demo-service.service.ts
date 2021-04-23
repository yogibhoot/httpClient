import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { User } from '../modal/user';

@Injectable({
  providedIn: 'root'
})

export class DemoServiceService {

  _url = "https://jsonplaceholder.typicode.com/todos";

  constructor(private http : HttpClient) { }

  // getdata()
  // {
  //   return this.http.get(this._url);
  // }

  // getUserlist(): Observable<User> {
  //   return this.http.get<User>(this._url)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }

  // getUser(id : any): Observable<User> {
  //   return this.http.get<User>(this._url  +"/"+ id)
  //   .pipe(
  //     retry(1),
  //     catchError(this.handleError)
  //   )
  // }  

  getUserlist(): Observable<User> {
    return this.http.get<User>(this._url)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  // HttpClient API get() method => Fetch employee
  getUser(id : any): Observable<User> {
    return this.http.get<User>(this._url + "/" + id)
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }  

  handleError(error : any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }

}
