import { Component } from '@angular/core';

@Component({
  selector: 'app-pipesdatebuttonclick',
  templateUrl: './pipesdatebuttonclick.component.html',
  styleUrls: ['./pipesdatebuttonclick.component.css']
})
export class PipesdatebuttonclickComponent  {
  Todaysdate = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }


  constructor() { }

  ngOnInit() {
  }
}

