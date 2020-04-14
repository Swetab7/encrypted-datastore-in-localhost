import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LocalstorageService } from 'src/app/services/localstorage.service';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

 token = localStorage.getItem("LoggedInUser"); 
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

  updateUser(body: object = {}): Observable<any> {

    const url ='http://139.59.55.24/api/v1/users/update_profile';
    return this.HttpClient.patch(url,body,{ headers: new HttpHeaders().set('Authorization',"Bearer "+this.token)});
  }


  //   patch(path: string, body: object = {}): Observable<any> {
  //   const url = `${environment.url}${path}`;
  //   return this._http
  //     .patch(url, this._utilsService.transformToSnakeCase(body), { observe: 'response' })
  //     .pipe(
  //       map(res => this.toastrMessage(res)),
  //       catchError(this.formatErrors.bind(this))
  //     );
  // }

}
