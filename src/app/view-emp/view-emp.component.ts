import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})

export class ViewEmpComponent implements OnInit {
  
  constructor(private myApi:ApiService) { 
    this.getEmpData()
  }
  
  empData:any
  
  getEmpData=()=>{
    this.myApi.viewEmp().subscribe(
      (resp) =>{
        console.log("Entered")
        this.dataSource = resp;
        console.log(resp)
      }
      )
  }

  deleteEmp=(id:any)=>{
    let data = {
      "id":id
    }
    console.log(data)
    this.myApi.deleteEmp(data).subscribe()
    alert("Delete succesful")
    this.getEmpData()
  }
    
    displayedColumns: string[] = ['name', 'age', 'email', 'address','salary','phone','joiningDate','delete'];
    dataSource :any
  
  ngOnInit(): void {
  }

}
