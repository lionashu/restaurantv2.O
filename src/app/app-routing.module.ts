import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RestuarentdashComponent } from './restuarentdash/restuarentdash.component';
import { MaterialComponent } from './material/material.component';
import { AuthGuard } from './share/auth.guard';

const routes:Routes =[
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'resturent',component:RestuarentdashComponent,canActivate:[AuthGuard]},
  {path:'material',component:MaterialComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',redirectTo:'login',pathMatch:'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
