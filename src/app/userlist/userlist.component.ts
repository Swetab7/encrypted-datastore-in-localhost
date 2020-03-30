import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  UserList:User[];
  constructor(private userservice:UserserviceService) { }
  
  ngOnInit() {

    this.UserList = this.userservice.getUsers();
    this.userservice.usersChanged
      .subscribe(
        (users: User[]) => {
          this.UserList = users;
        }
      );
  }

}
