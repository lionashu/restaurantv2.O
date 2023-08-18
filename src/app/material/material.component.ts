import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validator,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {
  hide:any
 public showPassword: boolean = false;  //password 

   loginForm!:FormGroup;
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm= new FormGroup (
      {
        email     : new FormControl("",[Validators.required, Validators.email]),
        password  : new FormControl("",[Validators.required, Validators.minLength(6)])
      }
     );
  }


  onLogin(){
      
  }
  get f(){
    return this.loginForm.controls;
  }
  
 // login method define
 login(){
  this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
    //matching email and password
  const user = res.find((a:any)=>{
    return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
  })
  //condition check for login
  if(user){
    alert("sucessfully logged in")
    this.loginForm.reset();
    this.router.navigate(['resturent'])
  }else{
    alert("NO USER FOUND");
  }
  }
  ,err=>{
    alert("something went wrong");
  }
    )
  
    }


    togglePasswordVisibility(){
      this.showPassword = !this.showPassword;
    }







}
