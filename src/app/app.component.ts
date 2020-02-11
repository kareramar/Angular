import { Component,OnInit } from '@angular/core';
import {UserService} from './user.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'ClientAngular';
  userlist:any=[];
constructor(private userService:UserService) { }


ngOnInit() {
   this.getList()
 }
  ChangesList(value) {
//this.ChangesOnCondition=value
  this.userService.getList().subscribe(uservalues=>{
    //  console.log(user);
      this.userlist=uservalues;
    })
  }
  getList() {
    this.userService.getList().subscribe(uservalues=>{
      //  console.log(user);
        this.userlist=uservalues;
      })
  }
}
