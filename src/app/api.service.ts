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
  viewEmp=()=>{
      return this.http.get("http://localhost:8080/viewEmp")
  }
  viewSec=()=>{
      return this.http.get("http://localhost:8080/viewSec")
  }
  searchEmp=(data:any)=>{
      return this.http.post("http://localhost:8080/searchEmp",data)
  }
  deleteEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteEmp",data)
  }
  editEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/updateEmp",data)
  }
  deleteSec=(data:any)=>{
    return this.http.post("http://localhost:8080/viewSec",data)
  }
  viewLeave=()=>{
    return this.http.get("http://localhost:8080/viewAllLeaves")
  }
  updateLeaveStatus=(data:any)=>{
    return this.http.post("http://localhost:8080/leaveStatus",data)
  }
}
