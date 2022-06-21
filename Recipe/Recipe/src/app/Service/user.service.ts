import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/moduls/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

newUser=new Subject<User>();

addUser(u:User){
return this.httpC.post("https://localhost:44351/api/User",u);
}
showAllUser(){
  return this.httpC.get<User[]>("https://localhost:44351/api/User")
}
showUserById(id){
  return this.httpC.get<User>("https://localhost:44351/api/User?id="+id);
}
deleteUser(c){
  return this.httpC.delete<User>("https://localhost:44351/api/User?codeRec="+c);
}


  constructor(public httpC:HttpClient) {
  }
}
