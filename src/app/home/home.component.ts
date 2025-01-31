import { Component, OnInit, OnChanges, SimpleChanges, 
  DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements 
OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy{

text:any;
message = 'Hello, Angular!';
private intervalId: any;

constructor() {
console.log('Constructor: Component instantiated');
}

ngOnChanges(changes: SimpleChanges) {
console.log('ngOnChanges:', changes);
}

ngOnInit() {
console.log('ngOnInit: Component initialized');
// this.intervalId = setInterval(() => {
// console.log('Interval running...');
// }, 5000);
}

ngDoCheck() {
console.log('ngDoCheck: Custom change detection');
}

ngAfterContentInit() {
console.log('ngAfterContentInit: Content initialized');
}

ngAfterContentChecked() {
console.log('ngAfterContentChecked: Content checked');
}

ngAfterViewInit() {
console.log('ngAfterViewInit: View initialized');
}

ngAfterViewChecked() {
console.log('ngAfterViewChecked: View checked');
}

ngOnDestroy() {
console.log('ngOnDestroy: Component destroyed');
clearInterval(this.intervalId);
}

user:User={
 name:'',
 age:0
}



}