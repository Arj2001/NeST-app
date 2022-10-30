import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myRouter:Router,
    private myApi:ApiService) { }

  adminEmail = ""
  adminPassword = ""
  onAdminLogin=()=>{
    if(this.adminEmail == "admin" && this.adminPassword == "admin"){
      alert("Succesfull")
      localStorage.setItem("user","admin")
      this.myRouter.navigate(["/admin"])
    }else{
      alert("Invalid credtionals")
    }
  }

  empEmail = ""
  empPass = ""
  onEmpLogin=()=>{
    let data = {
      "email":this.empEmail,
      "password":this.empPass
    }
    console.log(data);
    this.myApi.authEmp(data).subscribe(
      (resp:any)=>{
        if (resp.length == 0) {
          alert("Invalid credtionals")
        } else {
        console.log(resp)
         alert("success") 
         localStorage.setItem("emp_id",resp[0].id)
         console.log(localStorage.getItem("emp_id"));
         localStorage.setItem('emp_name',resp[0].name)
         this.myRouter.navigate(["/empdash"])
        }
      }
    )
    
  }

  onSecLogin=()=>{
    let data = {
      "email":this.secEmail,
      "password":this.secPass
    }
    this.myApi.authSec(data).subscribe(
      (resp:any)=>{
        if (resp.length == 0) {
          alert("Invalid credtionals")
        } else {
        console.log(resp)
         alert("success") 
         localStorage.setItem("sec_id",resp[0].id)
         localStorage.setItem("sec_name",resp[0].name)
         console.log(localStorage.getItem("sec_id"));
         this.myRouter.navigate(["/security"])
        }
      }
    )
  }

  secEmail = ""
  secPass = ""

  ngOnInit(): void {
  }

}
