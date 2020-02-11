import { Component, OnInit,Input, Output,EventEmitter,OnChanges } from '@angular/core';
import {UserService} from '../user.service'
import {User} from '../user';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
// userlist:any=[];
user:User;
@Input()  userlist;
  constructor(private userService:UserService) {
   
   }
  ngOnInit() {
   // this.getList()
  }

// getList() {
//   this.userService.getList().subscribe(uservalues=>{
//     //  console.log(user);
//       this.userlist=uservalues;
//     })
// }

ChangesList(data) {
 // this.getList();
}


}
