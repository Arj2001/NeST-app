import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.getCheckInData()
  }
  
  
  
  getCheckInData=()=>{
    this.myApi.viewCheckIn().subscribe(
      (resp) =>{
        console.log("Entered")
        this.dataSource = resp;
        console.log(resp)
      }
      )
  }
  checkOut=(id:any)=>{
    let data = {
      "id":id,
      "logout_sec_id":localStorage.getItem('sec_id')
    }
    this.myApi.checkOut(data).subscribe()
    alert("Checked him Out")
    this.getCheckInData()
  }

 
    
    displayedColumns: string[] = ['emp_id', 'login_time', 'update'];
    dataSource :any =[]
  ngOnInit(): void {
  }

}
