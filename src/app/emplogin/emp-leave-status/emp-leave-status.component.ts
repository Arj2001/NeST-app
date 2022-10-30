import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-emp-leave-status',
  templateUrl: './emp-leave-status.component.html',
  styleUrls: ['./emp-leave-status.component.css']
})
export class EmpLeaveStatusComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.getLeaveData()
  }
  
  leaveData:any
  
  getLeaveData=()=>{
    let data ={
      "emp_id":localStorage.getItem('emp_id')
    }
    this.myApi.viewLeaveById(data).subscribe(
      (resp) =>{
        console.log("Entered")
        this.dataSource = resp;
        console.log(resp)
      }
      )
  }

    
    displayedColumns: string[] = ['name', 'description', 'apply_date', 'leave_date','type','status'];
    dataSource :any  
  
  ngOnInit(): void {
  }

}
