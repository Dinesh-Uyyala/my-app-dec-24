import { Component } from '@angular/core';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.css']
})
export class DummyComponent {
  isLoggedIn = false;
  showTemplate = false;
  items = ['Item 1', 'Item 2', 'Item 3'];
  
  toggleLoginStatus() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
