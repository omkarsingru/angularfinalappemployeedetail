import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appEmpbackcolor]'
})
export class EmpbackcolorDirective implements OnInit {
  @Input("emp") empExp: Number;
  constructor(private el: ElementRef) {}

  ngOnInit() {
    console.log(this.empExp); 
    if(this.empExp < 8){
      this.el.nativeElement.style.backgroundColor = "blue";
    } else if(this.empExp == 8){
      this.el.nativeElement.style.backgroundColor = "pink";
    } else {
      this.el.nativeElement.style.backgroundColor = "purple";
    }
    
  }
}