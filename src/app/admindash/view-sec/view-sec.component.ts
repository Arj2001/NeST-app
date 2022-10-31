import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-view-sec',
  templateUrl: './view-sec.component.html',
  styleUrls: ['./view-sec.component.css']
})
export class ViewSecComponent implements OnInit {

  constructor(private myApi:ApiService) { 
    this.getSecData()
  }
  
  
  
  getSecData=()=>{
    this.myApi.viewSec().subscribe(
      (resp) =>{
        console.log("Entered")
        this.dataSource = resp;
        console.log(resp)
      }
      )
  }

  deleteSec=(id:any)=>{
    let data = {
      "id":id
    }
    console.log(data)
    this.myApi.deleteSec(data).subscribe()
    alert("Delete succesful")
    this.getSecData()
  }
    
    displayedColumns: string[] = ['name', 'age', 'email', 'address','salary','phone','doj','delete'];
    dataSource :any
  
  
  ngOnInit(): void {
  }

}
