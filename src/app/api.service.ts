import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  authEmp=(data:any)=>{
      return this.http.post("http://localhost:8080/authEmp",data)
  }
  authSec=(data:any)=>{
      return this.http.post("http://localhost:8080/authSec",data)
  }
  addEmp=(data:any)=>{
      return this.http.post("http://localhost:8080/addEmp",data)
  }
  addSec=(data:any)=>{
      return this.http.post("http://localhost:8080/addSec",data)
  }


}
