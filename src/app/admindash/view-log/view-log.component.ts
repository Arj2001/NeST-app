import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-view-log',
  templateUrl: './view-log.component.html',
  styleUrls: ['./view-log.component.css']
})
export class ViewLogComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.getLogData()
  }
  
  
  
  getLogData=()=>{
    this.myApi.viewLog().subscribe(
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
