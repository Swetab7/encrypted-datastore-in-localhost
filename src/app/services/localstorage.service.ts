import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  
  // addUser(signupUser:User){
  //   this.users.push(signupUser);
  //   this.usersChanged.emit(this.users.slice());
  //   this.setLocal(this.users);
  // }
   encode(value) {
    return btoa(value);
  }
  decode(value) {
    return atob(value);
  }

  // setLocal(users){
  //   this.setIt("SignUpUser",users)
  // }

  // setIt(key, value) {
  //   const valuePass = this.encode(JSON.stringify(value));
  //   localStorage.setItem(key, valuePass)
  //   console.log(localStorage[key]);
  //   // this.SignUpUserList=this.getItem(key);
  //   console.log(this.SignUpUserList);
  // }

  //  getItem(key) {
  //   return window.localStorage.getItem(key) ? JSON.parse
  //   (this.decode(window.localStorage.getItem(key))) : null;
  // // }
}
