import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-sec',
  templateUrl: './search-sec.component.html',
  styleUrls: ['./search-sec.component.css']
})
export class SearchSecComponent implements OnInit {

  constructor(private myApi:ApiService) { }
  inputValue: any = ""
  searchData:any =[]
  onSearchSec = () => {
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
    this.myApi.searchSec(data).subscribe(
      (resp) =>{
        console.log(resp)
        this.searchData = resp
      }
    )

  }

  onUpdateSec=(id:any)=>{

    this.myApi.editSec(this.searchData[0]).subscribe(
      (resp)=>{
        alert("success")
        console.log(resp)
      }
    );
  } 
   ngOnInit(): void {
  }

}
