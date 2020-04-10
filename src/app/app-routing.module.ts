import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { UserhomeComponent } from './component/userhome/userhome.component';



const routes: Routes = [
						{path: 'login', component: LoginComponent },
						{path: 'signup', component: SignupComponent},
						{path: 'userhome', component:  UserhomeComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
