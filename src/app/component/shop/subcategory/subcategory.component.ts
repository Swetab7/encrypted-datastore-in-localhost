import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.component.html',
  styleUrls: ['./subcategory.component.css']
})
export class SubcategoryComponent implements OnInit {

  constructor(private router:Router,public route: ActivatedRoute,public http:HttpService) { }
  subCategories = [];
  category;
  category_id: any;

  ngOnInit() {
  	this.getcategoryid();
    this.getSubcategories();
  }
  getcategoryid(){
    const cid = this.route.snapshot.paramMap;
    this.category_id =cid.get('cid'); 
  }

  getSubcategories(){
      
  		 this.http.getsubCategories( this.category_id).subscribe(
       res=>{
          this.subCategories =res.data.subcategories;
          this.category=res.data.category;
        }
     )
  }

  showProducts(subCategory){
    this.router.navigate(['/products',subCategory.id]);
  }

}
