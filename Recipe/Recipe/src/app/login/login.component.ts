import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/moduls/User';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
arrUsers:User[];
newUser:User=new User(null,null,null,null,null);
userNow:User;
reg:boolean=false;
p:User;
enterLog(){
  this.userSer.showUserById(this.newUser.password).subscribe(succes=>{
    if(succes==null){
      localStorage.setItem("newUser",JSON.stringify(this.newUser));
       alert("you need to register!! 📋");
       this.rout.navigate(["regis",this.newUser.password]);
    }
    else if(succes.name==this.newUser.name&&succes.password!=this.newUser.password)
    alert("error ❓ "); 
    else{
    alert("you exsist!! 😄 😄 😄");
   localStorage.setItem("newUser",JSON.stringify(succes));
    this.rout.navigate(["allRec"]);
  }
     },
     error=>{
       console.log(error);
     })
  }
  constructor(public userSer: UserService,public rout:Router) {    
  }


  ngOnInit(): void {
  }

  }