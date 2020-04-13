import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
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
  rUser:Loginuser;
  edit_btn= true;
  updateForm:any;
  userId;
  error=null;
   @ViewChild('fileInput',{static: false}) el: ElementRef;
  imageUrl: any = "https://previews.123rf.com/images/martialred/martialred1608/martialred160800018/61263271-user-account-profile-circle-flat-icon-for-apps-and-websites.jpg" ;
  aUpdated = {
    image: false
  };
  file;

  ngOnInit() {
    this.rUser=this.userservice.currentUser();
    this.userId=this.rUser.id;
    console.log(this.rUser);
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
      email:this.rUser.email  
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

  uploadFile(event){
    this.aUpdated.image = true;
    let reader = new FileReader(); // HTML5 FileReader API
    this.file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(this.file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
      }
    }
  }




}
