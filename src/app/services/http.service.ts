import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { LocalstorageService } from 'src/app/services/localstorage.service';
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

  updateUser(body: object = {}): Observable<any> {

    const url ='http://139.59.55.24/api/v1/users/update_profile';
    return this.HttpClient.patch(url,body,{ headers: new HttpHeaders().set('Authorization',"Bearer "+localStorage.getItem("LoggedInUser"))});
  }

  getDivision():Observable<any> 
  {
    const url = 'http://139.59.55.24/api/v1/divisions';
    return this.HttpClient.get(url);
  }

  getCategory():Observable<any> 
  {
    const url='http://139.59.55.24/api/v1/categories';
    return this.HttpClient.get(url,{ headers: new HttpHeaders().set('Authorization',"Bearer "+localStorage.getItem("LoggedInUser"))});
  }

  getsubCategories(body: object = {}):Observable<any> 
  {
    let httpParams = new HttpParams();
    const url='http://139.59.55.24/api/v1/subcategories';
    if (body && Object.keys(body).length) {
      for (const key in body) {
        if (body.hasOwnProperty(key)) {
          if (Array.isArray(body[key])) {
            for (let i = 0, len = body[key].length; i < len; i++) {
              httpParams = httpParams.append(`${key}`, body[key][i]);
            }
          } else {
            httpParams = httpParams.set(key, body[key]);
          }
        }
      }
    }
    return this.HttpClient
      .get(url, { params: httpParams });
  }
}
