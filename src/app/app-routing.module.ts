import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserhomeComponent } from './userhome/userhome.component';



const routes: Routes = [
						{path: 'login', component: LoginComponent },
						{path: 'signup', component: SignupComponent},
						{path: 'userlist', component:  UserlistComponent},
						{path: 'userhome', component:  UserhomeComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
