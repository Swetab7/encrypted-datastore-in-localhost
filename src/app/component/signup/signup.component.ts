import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
import { User } from 'src/app/models/user.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f',{static: false}) signupForm:NgForm;
  error=null;

  constructor(private userservice:UserserviceService) { 
    
  }

  ngOnInit() {
    
  }

  formSubmit(signupForm:NgForm){
    
    const params = {
      registration: { ...signupForm.value }
     };
     this.userservice.signup(params).subscribe((res: any) => {
     // this.userservice.setLocal(res);
     console.log(res.data);
     }, error => {
        this.error=error.error.errors;
     });

    // const value=this.signupForm.value;
    // const fname=value.first_name;
    // const lname=value.lname;
    // const email=value.email;
    // const password=value.password;
    // const cpassword=value.confirmPassword;
    // const SignupUser= new User(fname,lname,email,password,cpassword);
    // this.userservice.addUser(SignupUser);
    this.signupForm.reset();
  }

  
}
