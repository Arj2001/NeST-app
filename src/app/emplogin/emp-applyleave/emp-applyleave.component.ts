import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-emp-applyleave',
  templateUrl: './emp-applyleave.component.html',
  styleUrls: ['./emp-applyleave.component.css']
})
export class EmpApplyleaveComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  type = ""
  description = ""
  leaveDate = ""
  onAddLeave= () => {
    let data = {
      "emp_id" : localStorage.getItem("emp_id"),
      "type":this.type,
      "description":this.description,
      "leaveDate":this.leaveDate
    }
  
    console.log(data)
    this.myApi.applyLeave(data).subscribe();
    alert("applied");


  }
  ngOnInit(): void {
  }

}
