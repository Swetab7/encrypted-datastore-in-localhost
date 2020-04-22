import { Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { UserserviceService } from './userservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private myRoute: Router,private service:UserserviceService) { }
  
  sendToken(token: string) {
    localStorage.setItem("LoggedInUser", token)
  }
  getToken() {
    return localStorage.getItem("LoggedInUser")
  }
  
  isLoggedIn() {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem("LoggedInUser");
    localStorage.removeItem("userDetail");
    this.myRoute.navigate(["login"]);
  }

}
