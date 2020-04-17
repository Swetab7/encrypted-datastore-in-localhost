import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterModule,Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/user/login/login.component';
import { SignupComponent } from './component/user/signup/signup.component';
import { UserhomeComponent } from './component/user/userhome/userhome.component';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { HomeComponent } from './component/shared/home/home.component';
import { DashboardComponent } from './component/shared/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    UserhomeComponent,
    MatchPasswordDirective,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],

})
export class AppModule { }
