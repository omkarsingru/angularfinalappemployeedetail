import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Employeedetail } from './employeedetail';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  getEmployeedetails: any;
  createDb() {
    const employeedetails = [
      { id: 11,doj: new Date("05/10/1987"), name: 'Smith' , experience: 3},
      { id: 12,doj: new Date("6/11/1994"), name: 'Jackson' , experience: 6},
      { id: 13,doj: new Date("8/12/1999"), name: 'yamini' , experience: 8},
      { id: 14,doj: new Date("2/7/2004"), name: 'Sameer' , experience: 13},
      { id: 15,doj: new Date("08/4/2000"), name: 'Jack' , experience: 15},
      { id: 16,doj: new Date("7/1/2001"), name: 'yamaha' , experience: 12}
    ];
   
    return employeedetails;

  }
}