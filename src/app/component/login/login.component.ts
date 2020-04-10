import { Component, OnInit,ViewChild } from '@angular/core';

// import { Loginuser } from 'src/app/models/loginuser.model';
import { UserserviceService } from 'src/app/services/userservice.service';
import { HttpService } from 'src/app/services/http.service';
import { NgForm } from '@angular/forms';
import { AuthService} from 'src/app/services/auth.service';
import { Router} from '@angular/router';

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
    private httpService:HttpService) { }
	
  ngOnInit() {


  }

  formLogin(loginForm:NgForm){

    const params = {
      user: { ...loginForm.value }
     };
     this.userservice.login(params).subscribe(res => {
      // console.log(res.data.response.user);
      
      this.token=res.data.response.token;
      this.auth.sendToken(this.token);
      this.myRoute.navigate(['userhome']);

      let resUser=res.data.response.user;
      // console.log(resUser);
      this.userservice.getUser(resUser);
      
    }, error => {
        this.error=error.error.errors;
    });

    if(this.loginForm.valid && this.error == null ){
    alert("you are login sussecfully");       
      this.loginForm.reset();

    }  
   
  }

  

}
