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
  params = {
    category_id: null,
  }

  // const params = {
  //     user: { ...loginForm.value }
  //    };
  ngOnInit() {
  	 this.getcategoryid();
    this.getSubcategories();

  }
  getcategoryid(){
    const cid = this.route.snapshot.paramMap;
    this.params.category_id =cid.get('cid'); 
    console.log(this.params.category_id);
  }
  getSubcategories(){
      
  		 this.http.getsubCategories(this.params).subscribe(
       res=>{
         console.log(res);
          // this.categories = [...this.categories, ...res.data.categories];
          this.subCategories = [ ...res.data.subcategories];
          this.category=res.data.category;
        }
     )
  }

  showProducts(subCategory){
    localStorage.setItem('SUBCATEGORY',subCategory);
    this.router.navigate(['/products',subCategory.id]);
  }

}
