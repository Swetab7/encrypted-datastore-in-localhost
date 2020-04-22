import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }
  encode(value) {
    return btoa(value);
  }
  decode(value) {
    return atob(value);
  }
  setLocal(rUser){
    console.log(rUser);
    this.setUser("userDetail",rUser)
  }
  setUser(key,rUser) {
    const r_User = this.encode(JSON.stringify(rUser));
    localStorage.setItem(key,r_User);
  }
  getItem(key) {
     return window.localStorage.getItem(key) ? JSON.parse
    (this.decode(window.localStorage.getItem(key))) : null;
  }
}
