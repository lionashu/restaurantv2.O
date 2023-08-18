import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }
//get All Data
getAllRestaurant(){
  return this._http.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
    return res;
  }))
}
//post Data
postRestaurant(data:any){
  return this._http.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
    return res;
  }))
}
//update data
updateRestaurant(data:any, id:number){
  return this._http.put<any>("http://localhost:3000/posts/"+id, data).pipe(map((res:any)=>{
    return res;
  }))
}
//delete data
deleteRestaurant(id:number){
  return this._http.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
    return res;
  }))
}
}
