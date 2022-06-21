import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/moduls/User';
import { UserService } from '../Service/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

emptyUser:User;
newUser:User;
  constructor(public activ:ActivatedRoute,public userSer:UserService,public rout:Router) {  
    this.emptyUser=JSON.parse(localStorage.getItem("newUser"));
  }
  registerUser(){
   this.userSer.showUserById(this.emptyUser.password).subscribe(succ=>{
   if(succ==null){
    this.rout.navigate(["allRec"]);
    localStorage.setItem("newUser",JSON.stringify(this.emptyUser));
   }
   else{
    alert("user exsist!! ✔ ");   
}
},
error=>{
  console.log(error);
}

)
  }
  ngOnInit(): void {
    
  }

}
