import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { User } from '../user.model';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f',{static: false}) signupForm:NgForm;
  

  constructor(private userservice:UserserviceService) { 
    
  }

  ngOnInit() {
  }

  // formSubmit(form:NgForm){
  //   console.log(form);
  // }

  formSubmit(signupForm:NgForm){
    const value=this.signupForm.value;
    const name=value.name;
    const email=value.email;
    const username=value.username;
    const password=value.password;

    const SignupUser= new User(name,email,username,password);
    this.userservice.addUser(SignupUser);
    

  }
  // onAddItem() {
  //   const ingName = this.nameInputRef.nativeElement.value;
  //   const ingAmount = this.amountInputRef.nativeElement.value;
  //   const newIngredient = new Ingredient(ingName, ingAmount);
  //   this.slService.addIngredient(newIngredient);
  // }

}
