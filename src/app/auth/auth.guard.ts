import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
	constructor(private auth:AuthService,private myRoute:Router)
	{

	}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> |
     boolean | UrlTree {
      // debugger 
  	  if(this.auth.isLoggedIn()){
       
        // alert("you are login sussecfully")
        return true;
      }else{
        // alert("Please Login")
        this.myRoute.navigate(["login"]);
        return false;
      }
	   
  }
  
}
