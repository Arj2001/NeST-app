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
  searchSec=(data:any)=>{
      return this.http.post("http://localhost:8080/searchSec",data)
  }
  deleteEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteEmp",data)
  }
  editEmp=(data:any)=>{
    return this.http.post("http://localhost:8080/updateEmp",data)
  }
  editSec=(data:any)=>{
    return this.http.post("http://localhost:8080/updateSec",data)
  }
  deleteSec=(data:any)=>{
    return this.http.post("http://localhost:8080/deleteSec",data)
  }
  viewLeave=()=>{
    return this.http.get("http://localhost:8080/viewAllLeaves")
  }
  updateLeaveStatus=(data:any)=>{
    return this.http.post("http://localhost:8080/leaveStatus",data)
  }
  viewLog=()=>{
    return this.http.get("http://localhost:8080/viewAllLog")
  }
  viewLogById=(data:any)=>{
    return this.http.post("http://localhost:8080/viewLogById",data)
  }
  
  applyLeave=(data:any)=>{
    return this.http.post("http://localhost:8080/applyLeave",data)
  }
  viewLeaveById=(data:any)=>{
    return this.http.post("http://localhost:8080/viewLeaveById",data)
  }
  checkIn=(data:any)=>{
    return this.http.post("http://localhost:8080/checkIn",data)
  }
  checkOut=(data:any)=>{
    return this.http.post("http://localhost:8080/checkOut",data)
  }
  viewCheckIn=()=>{
    return this.http.get("http://localhost:8080/viewCheckIn")
  }

}
