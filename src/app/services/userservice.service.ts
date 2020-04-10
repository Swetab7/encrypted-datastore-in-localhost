import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Loginuser } from '../models/loginuser.model';
import { EventEmitter } from '@angular/core';
import { HttpService } from './http.service';
import { LocalstorageService } from 'src/app/services/localstorage.service'; 
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 // usersChanged = new EventEmitter<User[]>();
 // userLoggedIn:Loginuser[]=[];
 private users:User[]=[];
 private loginuser:{};

 
  constructor(private http:HttpService) { }

   
  login(params) {
    return this.http.postLogin(params);
  }
  signup(params) {
    return this.http.postSignup(params);
  }

  updateUser(params){
    return this.http.updateUser(params);
  }

  getUser(resUser){
    this.loginuser = resUser;
    // console.log(this.loginuser);
  }


  currentUser(){
    return (this.loginuser)
  }
}
