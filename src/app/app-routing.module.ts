import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { LoginComponent } from './component/user/login/login.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { UserhomeComponent } from './component/user/userhome/userhome.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { HomeComponent } from './component/shared/home/home.component';
import { DashboardComponent } from './component/shared/dashboard/dashboard.component';
import { SubcategoryComponent } from './component/shared/dashboard/subcategory/subcategory.component';
import { ProductsComponent } from './component/shared/dashboard/products/products.component';
import { ProductDetailComponent } from './component/shared/dashboard/product-detail/product-detail.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path: 'header',component:HeaderComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'login',component: LoginComponent },
  {path:'signup',component: SignupComponent},
  {path:'userhome',component:UserhomeComponent,canActivate:[AuthGuard]},
  {path:'footer',component:FooterComponent},
  {path:'subcategory/:cid',component:SubcategoryComponent},
  {path:'products/:subcategoryId',component: ProductsComponent},
  {path:'product/:productId',component: ProductDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
