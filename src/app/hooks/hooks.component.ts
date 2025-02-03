import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-hooks',
  templateUrl: './hooks.component.html',
  styleUrls: ['./hooks.component.css']
})
export class HooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  interval:any;
  constructor() {
    console.log("Constructor");
  }
  ngOnDestroy(): void {
    console.log("ngondestroy");
    clearInterval(this.interval);
  }
  ngAfterViewChecked(): void {
    console.log("ngafterviewchecked");
  }
  ngAfterViewInit(): void {
    console.log("ngafterviewinit");
  }
  ngAfterContentChecked(): void {
    console.log("ngaftercontentchecked");
  }
  ngAfterContentInit(): void {
    console.log('"ngaftercontentinit"');
  }
  ngDoCheck(): void {
    console.log("ngdocheck");
  }
  ngOnInit(): void {
    console.log("ngoninit");
    this.interval=setInterval(()=>{
      console.log("Interval.............");
    },3000)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngonchnages");
  }



  // ngOnChanges
  // ngOnInIt
  // ngDoCheck
  // ngAfterContentInit
  // ngAfterContectChecked
  // ngAfterViewInit
  // ngAfterViewChecked
  // ngDestroy


}
