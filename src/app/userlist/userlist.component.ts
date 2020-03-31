import { Component, OnInit } from '@angular/core';
import { Loginuser } from '../loginuser.model';
import { UserserviceService } from '../userservice.service';
import { AuthService } from '../auth.service';

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
