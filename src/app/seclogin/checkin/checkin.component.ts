import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.css']
})
export class CheckinComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  emp_id = ""

  checkIn=()=>{
    let data = {
      "emp_id":this.emp_id,
      "login_sec_id":localStorage.getItem('sec_id')
    }
    this.myApi.checkIn(data).subscribe()
    this.emp_id = ""
  }

  ngOnInit(): void {
  }

}
