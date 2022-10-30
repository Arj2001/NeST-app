import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emp-navbar',
  templateUrl: './emp-navbar.component.html',
  styleUrls: ['./emp-navbar.component.css']
})
export class EmpNavbarComponent implements OnInit {

  constructor(private myRouter:Router) { 
    
  }

  name = localStorage.getItem('emp_name')

  logout=()=>{
    localStorage.clear
    this.myRouter.navigate(["/"])
  }

  ngOnInit(): void {
  }

}
