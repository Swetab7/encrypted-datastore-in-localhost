import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/app/services/userservice.service';
import { Loginuser  } from 'src/app/models/loginuser.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  

  constructor(private userservice:UserserviceService) { }
  rUser:{};
  edit_btn= true;
  updateForm:any;
  error=null;

  ngOnInit() {
    this.rUser=this.userservice.currentUser();
    // console.log(this.rUser);
      this.updateForm=new FormGroup({
      first_name:new FormControl('',Validators.required),
      last_name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      image:new FormControl('',Validators.required),
    })
  
  }

  get fcontrol(){return this.updateForm.controls}


  onEdit(){
    this.edit_btn=false;
    this.rUser=this.userservice.currentUser();
    this.updateForm.patchValue({
      first_name:this.rUser.first_name,
      last_name:this.rUser.last_name,
      email:this.rUser.email,   
    })
  }

  update(updateForm){
    const params ={user: { ...updateForm.value }};
    this.userservice.updateUser(params).subscribe(res => {
      console.log(res);
    }), error => {
        this.error=error;
        console.log(this.error)
    }
  }


}
