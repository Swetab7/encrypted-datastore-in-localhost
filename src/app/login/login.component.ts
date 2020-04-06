import { Component, OnInit,ViewChild } from '@angular/core';

import { Loginuser } from '../models/loginuser.model';
import { UserserviceService } from '../services/userservice.service';
import { HttpService } from '../services/http.service';
import { NgForm } from '@angular/forms';
import { AuthService} from '../services/auth.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	 @ViewChild('f',{static: false}) loginForm:NgForm;
   Users:Loginuser[];
   error=null;
  constructor(private userservice:UserserviceService,
    private auth:AuthService,
    private myRoute:Router,
    private httpService:HttpService) { }
	
  ngOnInit() {}

  formLogin(loginForm:NgForm){

    const params = {
      user: { ...loginForm.value }
     };
     this.userservice.login(params).subscribe(res => {
     this.userservice.setLocal(res);
    }, error => {
        this.error=error.error.errors;
    });
    if(this.loginForm.valid && this.error!=null){
     this.auth.sendToken("LoggedIn")
     this.myRoute.navigate(['userhome'])
     alert("you are login sussecfully")
     }
     this.loginForm.reset();
  }
}
