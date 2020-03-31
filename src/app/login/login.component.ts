import { Component, OnInit,ViewChild } from '@angular/core';

import { Loginuser } from '../loginuser.model';
import { UserserviceService } from '../userservice.service';
import { NgForm } from '@angular/forms';
// import { User } from '../user.model';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	 @ViewChild('f',{static: false}) loginForm:NgForm;

  constructor(private userservice:UserserviceService,private auth:AuthService,
    private myRoute:Router) { }
	// SignUpUser:User[]=this.userservice.SignUpUserList;


  ngOnInit() {
  }

  formLogin(loginForm:NgForm){
  	const value=this.loginForm.value;
  	const username=value.username;
    const password=value.password;

    const loginUser= new Loginuser(username,password);
    this.userservice.AddLoginUser(loginUser);
    
    if(this.loginForm.valid){
     this.auth.sendToken("LoggedIn")
     this.myRoute.navigate(['userhome'])
     alert("you are login sussecfully")
     }
     this.loginForm.reset();
  }

}
