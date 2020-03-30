import { Injectable } from '@angular/core';
import { User } from './user.model';
import { EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
 usersChanged = new EventEmitter<User[]>();
  private users:User[]=[
    new User('sweta','s@gmail.com', 'swetab','sweta')
  ];
  private USER_DETAILS: any;
  constructor() { }

   encode(value) {
    return btoa(value);
  }

  decode(value) {
    return atob(value);
  }


  getUsers() {
    return this.users.slice();
  }

  addUser(signupUser:User){
    // console.log(signupUser);
    this.users.push(signupUser);
    // console.log(this.users);
    this.usersChanged.emit(this.users.slice());


    localStorage.setItem("users", JSON.stringify(this.users))

    this.setLocal(this.users);
    }


       setLocal(users){
           this.setItem(this.USER_DETAILS,users)
    }

 setItem(key, value) {
    window.localStorage[key] = this.encode(JSON.stringify(value));
    // return this.getItem(key);
    console.log(localStorage[key]);
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
