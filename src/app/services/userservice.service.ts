import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Loginuser } from '../models/loginuser.model';
import { EventEmitter } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 usersChanged = new EventEmitter<User[]>();

 SignUpUserList:User[]=[];
 userLoggedIn:Loginuser[]=[];

  private users:User[]=[
  ];
  constructor(private http:HttpService) { }

  encode(value) {
    return btoa(value);
  }

  decode(value) {
    return atob(value);
  }

  // UserList
  getUsers() {
    return this.userLoggedIn.slice();
  }

  
  login(params) {
    return this.http.postLogin(params);
  }


  signup(params) {
    return this.http.postSignup(params);
  }

  addUser(signupUser:User){
    this.users.push(signupUser);
    this.usersChanged.emit(this.users.slice());
    this.setLocal(this.users);
  }
  

  setLocal(users){
    this.setIt("SignUpUser",users)
  }

  setIt(key, value) {
    const valuePass = this.encode(JSON.stringify(value));
    localStorage.setItem(key, valuePass)
    console.log(localStorage[key]);
    this.SignUpUserList=this.getItem(key);
    console.log(this.SignUpUserList);
  }

   getItem(key) {
    return window.localStorage.getItem(key) ? JSON.parse
    (this.decode(window.localStorage.getItem(key))) : null;
  }
}
