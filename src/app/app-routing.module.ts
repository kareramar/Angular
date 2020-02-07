import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { AddUserComponent } from './add-user/add-user.component';
import { CommonModule } from '@angular/common';
const routes: Routes = [
];

@NgModule({
  imports: [
  //  CommonModule,
    RouterModule.forRoot(routes)],
   // declarations: [AddUserComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
