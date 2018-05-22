import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login' , component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email',  component : EmailComponent}
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
