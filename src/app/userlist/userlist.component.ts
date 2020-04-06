import { Component, OnInit } from '@angular/core';
import { Loginuser } from '../models/loginuser.model';
import { UserserviceService } from '../services/userservice.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  UserList:Loginuser[];
  constructor(private userservice:UserserviceService) { }
  
  ngOnInit() {

    this.UserList = this.userservice.getUsers();
    this.userservice.usersChanged
      .subscribe(
        (users: Loginuser[]) => {
          this.UserList = users;
        }
      );
  }

}
