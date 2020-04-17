import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
   constructor(private auth:AuthService,private router:Router){
   	if(this.auth.isLoggedIn()){
   	this.router.navigate(["userhome"]);
   }
   else{
   	this.router.navigate(["home"]);
   }
  }
}

 // if(this.auth.isLoggedIn()){
       
 //        // alert("you are login sussecfully")
 //        return true;
 //      }else{
 //        // alert("Please Login")
 //        this.myRoute.navigate(["login"]);
 //        return false;
 //      }