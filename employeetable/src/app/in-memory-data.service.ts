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
      { id: 11, name: 'Smith' , experience: 3},
      { id: 12, name: 'Jackson' , experience: 6},
      { id: 13, name: 'yamini' , experience: 8},
      { id: 14, name: 'Sameer' , experience: 13},
      { id: 15, name: 'Jack' , experience: 15},
      { id: 16, name: 'yamaha' , experience: 12}
    ];
   
    return employeedetails;

  }
}