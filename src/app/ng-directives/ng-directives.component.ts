import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-directives',
  templateUrl: './ng-directives.component.html',
  styleUrls: ['./ng-directives.component.css']
})
export class NgDirectivesComponent {
name:string='Dinesh';
email:string='connect@dineshuyyala.com';
isLoggedIn:boolean=true;
isDataChanged:boolean=true;
submitData(){
this.isDataChanged=!this.isDataChanged
}
submit(){
  alert("Data Submitted!!!!!")
}
}
