import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  name = ""
  age = ""
  salary = ""
  address = ""
  email = ""
  phone = ""
  password = ""
  designation = ""
  onAddEmp = () => {
    let data = {
      "name": this.name,
      "age": this.age,
      "salary": this.salary,
      "address": this.address,
      "email": this.email,
      "phone": this.phone,
      "password": this.password,
    }

    this.myApi.addEmp(data).subscribe();
    alert("added");


  }

  ngOnInit(): void {
  }

}
