import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  Today = new Date(1988, 3, 15);

  constructor() { }

  ngOnInit() {
  }

}
