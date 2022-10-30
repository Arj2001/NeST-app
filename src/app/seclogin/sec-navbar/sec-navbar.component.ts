import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sec-navbar',
  templateUrl: './sec-navbar.component.html',
  styleUrls: ['./sec-navbar.component.css']
})
export class SecNavbarComponent implements OnInit {

  constructor(private myRouter:Router) { }

  name = localStorage.getItem('sec_name')

  logout=()=>{
    localStorage.clear
    this.myRouter.navigate(["/"])
  }


  ngOnInit(): void {
  }

}
