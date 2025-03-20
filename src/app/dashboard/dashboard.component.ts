import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
    constructor( private _router:Router){}
  logout(){
      sessionStorage.removeItem('token');
      alert("Logout Successfully!");
      this._router.navigateByUrl("/login");
    }

    // Set the default theme to light
  theme = 'light-theme';

  // Toggle between light and dark theme
  toggleTheme(event:any) {
    this.theme = event.target.checked ? 'dark-theme' : 'light-theme';
  }
}
