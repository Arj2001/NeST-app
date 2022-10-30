import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-emp-log',
  templateUrl: './emp-log.component.html',
  styleUrls: ['./emp-log.component.css']
})
export class EmpLogComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.getLogData()
  }
  
  
  
  getLogData=()=>{
    let data = {
      "emp_id":localStorage.getItem('emp_id')
    }
    this.myApi.viewLogById(data).subscribe(
      (resp) =>{
        console.log("Entered")
        this.dataSource = resp;
        console.log(resp)
      }
      )
  }

 
    
    displayedColumns: string[] = ['emp_name', 'login_time', 'login_sec_name', 'logout_time','logout_sec_name'];
    dataSource :any =[]
  ngOnInit(): void {
  }

}
