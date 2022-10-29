import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-sec',
  templateUrl: './add-sec.component.html',
  styleUrls: ['./add-sec.component.css']
})
export class AddSecComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  name = ""
  age = ""
  salary = ""
  address = ""
  email = ""
  phone = ""
  password = ""
  
  onSecEmp = () => {
    let data = {
      "name": this.name,
      "age": this.age,
      "salary": this.salary,
      "address": this.address,
      "email": this.email,
      "phone": this.phone,
      "password": this.password,
    }

    this.myApi.addSec(data).subscribe();
    alert("added");


  }
  ngOnInit(): void {
  }

}
