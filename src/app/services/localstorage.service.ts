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
  setLocal(value){
    this.set_local("userDetail",value);
  }
  set_local(key,value) {
    const L_value = this.encode(JSON.stringify(value));
    localStorage.setItem(key,L_value);
  }
  getItem(key) {
     return window.localStorage.getItem(key) ? JSON.parse
    (this.decode(window.localStorage.getItem(key))) : null;
  }
}
