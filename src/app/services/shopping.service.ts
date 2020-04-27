import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  cartItemCount;
  constructor() { 
    console.log(this.cartItemCount)
  }
 
}
