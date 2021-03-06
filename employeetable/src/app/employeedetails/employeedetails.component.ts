import { Component, OnInit } from '@angular/core';
import { Employeedetail } from '../employeedetail';
import { InMemoryDataService } from '../in-memory-data.service';
import { Observable } from 'rxjs/internal/Observable';
import { delay } from 'q';



@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit { 

  id: any;
  experience: any;
  employeedetails: any;
  emp: any;
  ChechNum: any;
  employeedetail: Employeedetail[];
  dob: any;

  constructor(private InMemoryDataServicenew: InMemoryDataService ) {}  

  getEmployeedetails(): void {
    this.employeedetail = this.InMemoryDataServicenew.createDb();
    console.log(this.employeedetail);
  }

  
  ngOnInit() {
    this.getEmployeedetails();
    new Observable(observer => { 
      setTimeout(() => {
        
        for(let i of this.employeedetail)
        observer.next(i);
      },100)
    }).subscribe(value =>{
     console.log(value)
    })
  }
}
