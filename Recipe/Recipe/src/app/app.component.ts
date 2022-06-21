import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { User } from 'src/moduls/User';
import { UserService } from './Service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Recipe';
  nameUserNow:User;
  constructor(public serUser:UserService,public rout:Router){

  }
  ifLogin(){
   let u=JSON.parse(localStorage.getItem("newUser"));
   if(u==null)
    return false;
    return true;
  }
  logout(){
localStorage.clear();
 this.serUser.newUser=null;
 this.rout.navigate(["login"]);
alert("the user remove!");
  }
  ngOnInit() :void{
this.nameUserNow=JSON.parse(localStorage.getItem("newUser"));
if(this.nameUserNow==null){
  localStorage.setItem("newUser", JSON.stringify(null));
  this.nameUserNow=null
}
  }
  ngOnDestroy() :void{
  }

}
