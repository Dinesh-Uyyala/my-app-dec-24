import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
tasks:any=[];
task:string='';
  submit(){
    this.tasks.push(this.task)
    console.log(this.task);
  }
  delete(){
    this.tasks.pop();
  }

  todoItems = ['Buy groceries', 'Complete homework', 'Clean the house', 'Read a book'];
  foodItems = ['apples', 'Banana', 'Mango', 'Strawberry'];

  // Function to handle the drop event and reorder the items
  onItemDropped(event: CdkDragDrop<string[]>) {
    const previousIndex = this.todoItems.findIndex((d) => d === event.item.data);
    const currentIndex = event.currentIndex;

    // Reorder the items in the array
    this.todoItems.splice(previousIndex, 1);
    this.todoItems.splice(currentIndex, 0, event.item.data);
  }
}
