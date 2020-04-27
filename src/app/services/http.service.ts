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
    return this.HttpClient.patch(url,body,
        {headers: new HttpHeaders()
        .set('Authorization',"Bearer "+localStorage.getItem("LoggedInUser"))});
  }

  getDivision():Observable<any> 
  {
    const url = 'http://139.59.55.24/api/v1/divisions';
    return this.HttpClient.get(url);
  }

  getCategory():Observable<any> 
  {
    const url='http://139.59.55.24/api/v1/categories';
    return this.HttpClient.get(url,{ headers: new HttpHeaders().
      set('Authorization',"Bearer "+localStorage.getItem("LoggedInUser"))});
  }

  getsubCategories(category_id):Observable<any> 
  {
    let httpParams = new HttpParams();
    const url='http://139.59.55.24/api/v1/subcategories';
    httpParams = httpParams.set('category_id',category_id);
    return this.HttpClient
      .get(url, { params: httpParams });
  }

  getAllProducts(id) {
    const url = `http://139.59.55.24/api/v1/item_masters?subcategory_id=${id}`;
    return this.HttpClient.get(url,{ headers: new HttpHeaders()
      .set('Authorization',localStorage.getItem("LoggedInUser"))});
  }

  getProduct(id){
    const url =`http://139.59.55.24/api/v1/item_masters/${id}`;
    return this.HttpClient.get(url,{ headers: new HttpHeaders()
      .set('Authorization',localStorage.getItem("LoggedInUser"))});
  }

  addToCart(body: object = {}){
    const url='http://139.59.55.24/api/v1/shopping_carts/add_order_items'
    return this.HttpClient.patch(url,body,
        {headers: new HttpHeaders()
        .set('Authorization',"Bearer "+localStorage.getItem("LoggedInUser"))});
  
  }

  getCartItem(){
    const url ='http://139.59.55.24/api/v1/shopping_carts/show_current';
    return this.HttpClient.get(url,{ headers: new HttpHeaders()
      .set('Authorization',"Bearer "+localStorage.getItem("LoggedInUser"))});
  }
}
