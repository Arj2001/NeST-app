import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testcase',
  templateUrl: './testcase.component.html',
  styleUrls: ['./testcase.component.css']
})
export class TestcaseComponent implements OnInit {

  constructor() { }

  msg = null
  submit=()=>{
  console.log(this.msg)
  return this.msg
  }

  ngOnInit(): void {
  }

}
