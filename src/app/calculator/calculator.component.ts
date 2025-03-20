import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {
  num1:number=0;
  num2:number=0;
  sum:number=0;
  add(){
    console.log(this.num1,this.num2);
    this.sum=this.num1+this.num2;
  }
}
