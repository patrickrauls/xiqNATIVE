import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the Api provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Api {

  private url: string = 'http://api.xiqgolf.com/v1/';

  constructor(private http: Http) {
    console.log('Hello Api Provider');
  }
  getCourses() {
    return this.http.get(this.url + 'courses')
      .map(this.extractData)
      .do(this.logResponse)
      .catch(this.catchError)
  }
  getTournaments() {
    return this.http.get(this.url + 'tournaments')
      .map(this.extractData)
      .do(this.logResponse)
      .catch(this.catchError)
  }
  getTournamentVenue(venue_id) {
    return this.http.get(`${this.url}courses/${venue_id}`)
      .map(this.extractData)
      .do(this.logResponse)
      .catch(this.catchError)
  }
  private logResponse(res: Response) {
    console.log(res);
  }
  private extractData(res: Response) {
    return res.json();
  }
  private catchError(error: Response | any) {
    console.error(error)
    return Observable.throw(error.json() || 'Server Error');
  }

}
