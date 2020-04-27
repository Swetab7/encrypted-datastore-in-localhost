import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { ShoppingService} from 'src/app/services/shopping.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: any;
  productDetails: any;
  // category;
  // subcategory;
  constructor(private router:Router,
              private route: ActivatedRoute,
              private http:HttpService,
              private s_service:ShoppingService) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('productId');
    this.getProduct();
  }

  getProduct(){
    this.http.getProduct(this.productId)
    .subscribe((res: any) => {
      console.log(res);
      this.productDetails = res.data.item_master;
      console.log(this.productDetails);
    });
  }

  addToCart(item){
    // this.s_service.addItem(item);
    const orderItemAttributes = {
      itemMasterId: item.id,
      quantity: 1
    };
    const params = {
      order : {
        orderItemsAttributes : {
          "0": {...orderItemAttributes}
        }
      }
    };
    this.http.addToCart(params).subscribe((res:any)=> {
      console.log(res.data.order);
    });
    this.router.navigate(["/cart"]);
  }
}
