import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TestcaseComponent } from './testcase/testcase.component';
import { ViewEmpComponent } from './view-emp/view-emp.component';
import {MatTableModule} from '@angular/material/table';
import { SearchEmpComponent } from './search-emp/search-emp.component';
import { AddSecComponent } from './add-sec/add-sec.component';
import { ViewSecComponent } from './view-sec/view-sec.component';
import { ViewLeaveComponent } from './view-leave/view-leave.component';
import {MatSelectModule} from '@angular/material/select';
import { ViewLogComponent } from './view-log/view-log.component';
import { SearchSecComponent } from './search-sec/search-sec.component';
import { EmpdashComponent } from './emplogin/empdash/empdash.component';
import { EmpNavbarComponent } from './emplogin/emp-navbar/emp-navbar.component';
import { EmpApplyleaveComponent } from './emplogin/emp-applyleave/emp-applyleave.component';
import { EmpLeaveStatusComponent } from './emplogin/emp-leave-status/emp-leave-status.component';
import { EmpLogComponent } from './emplogin/emp-log/emp-log.component';
import { CheckinComponent } from './seclogin/checkin/checkin.component';
import { SecNavbarComponent } from './seclogin/sec-navbar/sec-navbar.component';
import { CheckOutComponent } from './seclogin/check-out/check-out.component';



const addRoutes:Routes = [
  {
    path:"admin",component:AdminComponent
  },
  {
    path:"",component:LoginComponent
  },
  {
    path:"test",component:TestcaseComponent
  },
  {
    path:"viewEmp",component:ViewEmpComponent
  },{
    path:"searchEmp",component:SearchEmpComponent
  },{
    path:"addSec",component:AddSecComponent
  },{
    path:"viewSec",component:ViewSecComponent
  },{
    path:"leave",component:ViewLeaveComponent
  },{
    path:"searchSec",component:SearchSecComponent
  },{
    path:"log",component:ViewLogComponent
  },{
    path:"empdash",component:EmpdashComponent
  },{
    path:"applyLeave",component:EmpApplyleaveComponent
  },{
    path:"leaveStatus",component:EmpLeaveStatusComponent
  },{
    path:"viewLogById",component:EmpLogComponent
  },{
    path:"security",component:CheckinComponent
  },{
    path:"checkOut",component:CheckOutComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    AdminNavbarComponent,
    TestcaseComponent,
    ViewEmpComponent,
    SearchEmpComponent,
    AddSecComponent,
    ViewSecComponent,
    ViewLeaveComponent,
    ViewLogComponent,
    SearchSecComponent,
    EmpdashComponent,
    EmpNavbarComponent,
    EmpApplyleaveComponent,
    EmpLeaveStatusComponent,
    EmpLogComponent,
    CheckinComponent,
    SecNavbarComponent,
    CheckOutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(addRoutes),
    MatToolbarModule,
    MatTableModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
