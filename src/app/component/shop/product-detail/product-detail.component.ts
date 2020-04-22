import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productId: any;
  productDetails: any;
  category;
  subcategory;
  constructor(public router:Router,public route: ActivatedRoute,public http:HttpService) { }

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
}
