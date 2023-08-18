import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder,Validator,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myform!:FormGroup
  constructor(private formbuilder:FormBuilder,private http:HttpClient, private router:Router) { }

  ngOnInit(): void {

this.myform=this.formbuilder.group({
  name     : ['',Validators.required],
  email     : ['',Validators.required],
  mobile     : ['',Validators.required],
  password     : ['',Validators.required],

})
  }

  //make method to create user
  signup(){
this.http.post<any>("http://localhost:3000/signup",this.myform.value).subscribe(res=>{
alert("Registred sucessfully");
this.myform.reset();
this.router.navigate(['login'])
},err=>{
  alert("something went wrong");
})
  }

}
