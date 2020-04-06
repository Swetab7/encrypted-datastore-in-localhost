import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  
  constructor(private HttpClient: HttpClient) { }

 postLogin(body: object = {}): Observable<any> {
    const url = 'http://139.59.55.24/api/v1/users/authenticate';
    // body = {"user": {"email": "test@yopmail.com", "password": "asdasd"}}
    return this.HttpClient.post(url,body);
  }
  
  postSignup(body: object = {}): Observable<any> {
    const url = 'http://139.59.55.24/api/v1/users/sign_up';
    // body = {"user": {"email": "test@yopmail.com", "password": "asdasd"}}
    return this.HttpClient.post(url,body);
  }
}
