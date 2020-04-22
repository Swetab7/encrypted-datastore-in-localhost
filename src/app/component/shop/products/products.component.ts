import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public router:Router,public route: ActivatedRoute,public http:HttpService) { }
  products = [];
  subcategoryId;
  category;
  subcategory;

  ngOnInit() {
    this.subcategoryId = this.route.snapshot.paramMap.get('subcategoryId');
    this.getAllProducts();
  }

  getAllProducts(){
    this.http.getAllProducts(this.subcategoryId)
    .subscribe((res: any) => {
        this.category = res.data.category;
        this.products = res.data.item_masters;
    });
  }

  showProduct(product){
    this.router.navigate(['/product_Detail',product.id]);  
  }
}
