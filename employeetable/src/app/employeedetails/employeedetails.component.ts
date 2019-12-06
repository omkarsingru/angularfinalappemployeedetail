import { Component, OnInit } from '@angular/core';
import { Employeedetail } from '../employeedetail';
import { InMemoryDataService } from '../in-memory-data.service';



@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit { 
  experience: any;
  employeedetails: any;
  emp: any;
  ChechNum: any;
  employeedetail: Employeedetail[];

  constructor(private InMemoryDataServicenew: InMemoryDataService ) {}  

  getEmployeedetails(): void {
    this.employeedetail = this.InMemoryDataServicenew.createDb();
    console.log(this.employeedetail);
  }

  
  ngOnInit() {
    this.getEmployeedetails();

  }

 
}