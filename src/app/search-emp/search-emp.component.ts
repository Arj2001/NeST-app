import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-emp',
  templateUrl: './search-emp.component.html',
  styleUrls: ['./search-emp.component.css']
})
export class SearchEmpComponent implements OnInit {

  constructor(private myApi:ApiService) { }
  inputValue: any = ""
  searchData:any =[]
  onSearchEmp = () => {
    let data
    if (isNaN(this.inputValue)) {
       data = {
        "id": 0,
        "name": this.inputValue
      }
    }else {
      data = {
        "id": this.inputValue,
        "name": this.inputValue
      }
    }
    this.myApi.searchEmp(data).subscribe(
      (resp) =>{
        this.searchData = resp
      }
    )

  }

  onUpdateEmp=(id:any)=>{

    this.myApi.editEmp(this.searchData[0]).subscribe(
      (resp)=>{
        alert("success")
        console.log(resp)
      }
    );
  }

  ngOnInit(): void {
  }

}
