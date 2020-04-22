import { Component, OnInit,ViewChild } from '@angular/core';
import { Router} from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { NgForm } from '@angular/forms';

import { AuthService} from 'src/app/services/auth.service';
import { UserserviceService } from 'src/app/services/userservice.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	 @ViewChild('f',{static: false}) loginForm:NgForm;
   
   error=null;
   private token;
  constructor(private userservice:UserserviceService,
    private auth:AuthService,
    private myRoute:Router,
    private httpService:HttpService,
    private local:LocalstorageService) { }
	
  ngOnInit() {}

  formLogin(loginForm:NgForm){

    const params = {
      user: { ...loginForm.value }
     };
     this.userservice.login(params).subscribe(res => {
     this.token=res.data.response.token;
     this.auth.sendToken(this.token);
     this.myRoute.navigate(['userhome']);

      let resUser=res.data.response.user;

     this.local.setLocal(resUser);
     this.userservice.getUser(resUser);
     this.local.setLocal(resUser);
      
    }, error => {
        this.error=error.error.errors;
    });

    if(this.loginForm.valid && this.error == null ){
    alert("you are login sussecfully");       
      this.loginForm.reset();

    }  
   
  }

  

}
