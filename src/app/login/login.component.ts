import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validator,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import{NgToastService} from 'ng-angular-popup';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formValues!:FormGroup
  hide:any;
  constructor(private formbuilder:FormBuilder,private http:HttpClient,private router:Router,private toast:NgToastService) { }

  ngOnInit(): void {

    this.formValues=this.formbuilder.group({
      email    :['',Validators.required],
      password :['',Validators.required],


    })
  }

  // login method define
  login(){
this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
  //matching email and password
const user = res.find((a:any)=>{
  return a.email === this.formValues.value.email && a.password === this.formValues.value.password
})
//condition check for login
if(user){
 // alert("sucessfully logged in")
 this.toast.success({detail:"sucess Message",summary:'sucessfully logged in',duration:6000})
  this.formValues.reset();
  this.router.navigate(['resturent'])
 
 
  localStorage.setItem('token',"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c")
  this.formValues.value.emailid? localStorage.setItem('usertype','employee'):''
}else{
  //alert("user not found with these credentials")
  this.toast.error({detail:'Error Message',summary:'user not found with these credentials',duration:8000})
}
}
,err=>{
 // alert("something went wrong");
  this.toast.warning({detail:'Error Message',summary:'something went wrong',duration:5000})
}
  )

  }
}
