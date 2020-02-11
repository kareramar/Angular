import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {UserService} from '../user.service'

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.sass']
})
export class AddUserComponent implements OnInit {
  myForm: FormGroup;
  @Output() valueonChanges  = new EventEmitter();
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.myForm=new FormGroup({
      "firstname":new FormControl(null),
      "lastname":new FormControl(null),
      "phone":new FormControl(null),
      "address":new FormControl(null),
    })
  }
  getList() {
    this.userService.getList().subscribe(uservalues=>{
      //  console.log(user);
       // this.messageToSendP=uservalues;
      })
  }
  onSave(data) {
let json={
  'firstname':data.firstname,
  'lastname':data.lastname,
  'phone':data.phone,
  'address':data.address
}
this.userService.adduser(json).subscribe((uservalues:any)=>{
  this.valueonChanges.emit(true);
 // this.valueChange.emit(uservalues);
  },(error)=>{
  })
  }

}
