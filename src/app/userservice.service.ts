import { Injectable } from '@angular/core';
import { User } from './user.model';
import { Loginuser } from './loginuser.model';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 usersChanged = new EventEmitter<User[]>();

 SignUpUserList:User[]=[];
 userLoggedIn:Loginuser[]=[];


  private users:User[]=[
  ];


  constructor() { }

  // for(i=0; i <= this.users.length:i++){

  // }

   encode(value) {
    return btoa(value);
  }

  decode(value) {
    return atob(value);
  }

  // UserList
  getUsers() {
    return this.userLoggedIn.slice();
  }

  addUser(signupUser:User){
    // console.log(signupUser);
    this.users.push(signupUser);
    // console.log(this.users);
    this.usersChanged.emit(this.users.slice());

    // localStorage.setItem("users", JSON.stringify(this.users))
    this.setLocal(this.users);
  }

  AddLoginUser(loginUser:Loginuser){
    this.check(loginUser);
    this.userLoggedIn.push(loginUser);

  }
  check(loginuser){
    
  }

  setLocal(users){
    this.setIt("SignUpUser",users)
  }

  setIt(key, value) {

    const valuePass = this.encode(JSON.stringify(value));
    localStorage.setItem(key, valuePass)
          // return this.getItem(key);
    console.log(localStorage[key]);
    this.SignUpUserList=this.getItem(key);
    console.log(this.SignUpUserList);
  }

 getItem(key) {
    return window.localStorage.getItem(key) ? JSON.parse
    (this.decode(window.localStorage.getItem(key))) : null;
  }
}



// login(form) 
//     const params = {
//       user: { ...form.value }
//     };
//     this.authService.login(params).subscribe((res: any) => {
//       this.close();
//       this.setLocal(res);
//       this.router.navigate(['/dashboard']);
//     });
//   }

//   setLocal(res) {
//     this.localStorageService.setItem(LOCAL_STORAGE_VARIABLES.USER_DETAILS, res.data);
//     this.jwtService.setToken(res.authorization);
//   }

// setItem(key, value) {
//     window.localStorage[key] = this.utilService.encode(JSON.stringify(value));
//     return this.getItem(key);
//   }
