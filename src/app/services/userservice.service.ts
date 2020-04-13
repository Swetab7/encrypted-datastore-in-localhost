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
 private cUser:Loginuser;

 
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
    this.cUser =new Loginuser(resUser.id, resUser.first_name,resUser.last_name,
      resUser.email,resUser.profile_picture);
    console.log(this.cUser);
  }


  currentUser(){
    return (this.cUser);
  }
}
