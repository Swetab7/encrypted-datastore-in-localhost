import { Component, OnInit,Input } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selected_Division;
  division_clicked=false;
  divisions;
  userDetail;
  categories: any = [];
  category:any=[];
  constructor(private http:HttpService,
    private auth:AuthService,
    private router:Router,
    private userservice:UserserviceService) { }

  ngOnInit() {
    if(this.auth.isLoggedIn()){
      this.getDivision();
    }
  }

  getDivision() {
    this.http.getDivision().subscribe(
      res=>{
        this.divisions = res.data.division;
        console.log(this.divisions,);
      })
  }

   setDivision(){
    const formData = new FormData();
    formData.append('user[division]', this.selected_Division);
    this.userservice.updateUser(formData).subscribe(
      res=>{
        console.log(res);
        this.userDetail=res.data.user;
        console.log(this.userDetail);
        this.Category();
      }
    )
    this.division_clicked=true;
  }

  Category() {
   this.http.getCategory().subscribe(
       res=>{
         console.log(res);
          // this.categories = [...this.categories, ...res.data.categories];
          this.categories = [ ...res.data.categories];
       }
     )
   
  }

  openSubCategory(category){
    console.log(category);
    this.router.navigate(["/subcategory",category.id]); 
  }


}
