import { Injectable } from '@angular/core';
import {HttpClientModule,HttpClient,HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient,
   ) { }

  getList() {
    return this.http.get('http://localhost:3000/list');
  }

  adduser(data) {
    var headers=new HttpHeaders({'Content-Type': 'application/json'});
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/addUser',data,{headers:headers})
  }

  deleteUser(id) {
    return this.http.delete('http://localhost:3000/'+id)
  }

}
 