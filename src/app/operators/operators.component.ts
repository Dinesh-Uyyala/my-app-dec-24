import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin, map } from 'rxjs';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent {
  constructor(private _httpClient:HttpClient){}
  getUser=this._httpClient.get('https://jsonplaceholder.typicode.com/todos/1');
  getPosts=this._httpClient.get('https://jsonplaceholder.typicode.com/posts?userId=1');
  
  ngOnInit(){
    // this.getUser.subscribe((data:any)=>{
    //   console.log(data);
    // })

    // this.getPosts.subscribe((data:any)=>{
    //   console.log(data);
    // })
    forkJoin([this.getUser,this.getPosts]).pipe(map(([user,posts])=>{
      return{
        user:user,
        posts:posts
      }
    })).subscribe((data:any)=>{
      console.log(data);
    })
  }
}
