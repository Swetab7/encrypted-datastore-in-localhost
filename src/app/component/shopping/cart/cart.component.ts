import { Component, OnInit } from '@angular/core';
import { ShoppingService} from 'src/app/services/shopping.service';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems;
  constructor(
  	private http:HttpService,
  	private s_service:ShoppingService,) {}

  ngOnInit() {
    this.http.getCartItem().subscribe((res:any)=> {
      console.log(res.data.order);
      this.cartItems=res.data.order;
    });
  }
}
