import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

import { UserserviceService } from 'src/app/services/userservice.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
 
  constructor(private userservice:UserserviceService,private auth:AuthService) { }
  rUser;
  edit_btn= true;
  updateForm:any;
  error=null;
  imageUrl: any = "https://previews.123rf.com/images/martialred/martialred1608/martialred160800018/61263271-user-account-profile-circle-flat-icon-for-apps-and-websites.jpg" ;
  file;

  ngOnInit() {
    this.rUser=this.userservice.currentUser();
    
    this.imageUrl= this.setUrl();
    // console.log(this.rUser);
    this.updateForm=new FormGroup({
      first_name:new FormControl('',Validators.required),
      last_name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      profile_picture:new FormControl('',Validators.required),
    })
  
  }

  get fcontrol(){return this.updateForm.controls}


  onEdit(){
    this.edit_btn=false;
    this.rUser=this.userservice.currentUser();
    this.updateForm.patchValue({
      first_name:this.rUser.first_name,
      last_name:this.rUser.last_name,
      email:this.rUser.email  
    })
  }

  update(updateForm){
    const formData = new FormData();
    formData.append('user[first_name]',this.updateForm.get('first_name').value);
    formData.append('user[last_name]',this.updateForm.get('last_name').value);
    formData.append('user[email]',this.updateForm.get('email').value);
    formData.append('user[profile_picture]', this.file);
    
    this.userservice.updateUser(formData).subscribe(res => {
      console.log(res);
    }), error => {
        this.error=error;
        console.log(this.error)
    }
  }

  uploadFile(event){
    let reader = new FileReader(); 
    this.file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(this.file);
      console.log(this.file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      }

    }
  }

  setUrl(){
     let Url = this.rUser.profile_picture.url ? this.rUser.profile_picture.url:
     'https://previews.123rf.com/images/martialred/martialred1608/martialred160800018/61263271-user-account-profile-circle-flat-icon-for-apps-and-websites.jpg';
      return(Url);
    };

    
  

}
