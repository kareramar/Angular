import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import {UserComponent} from './user/user.component'
import { CommonModule } from '@angular/common';
const routes: Routes = [
  {
    path:'',
    redirectTo:'app',
    pathMatch:'full'
  },
  {
    path:'add-user',
    component:AddUserComponent,
  },
  {
    path:'user',
    component:UserComponent
  }

];

@NgModule({
  imports: [
  //  CommonModule,
    RouterModule.forRoot(routes)],
   // declarations: [AddUserComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
