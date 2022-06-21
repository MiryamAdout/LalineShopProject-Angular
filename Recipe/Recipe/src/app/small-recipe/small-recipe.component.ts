import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from 'src/moduls/Recipe';
import { User } from 'src/moduls/User';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-small-recipe',
  templateUrl: './small-recipe.component.html',
  styleUrls: ['./small-recipe.component.scss']
})
export class SmallRecipeComponent {
  @Input()
  recipeSmall:Recipe=new Recipe(null,null,null,null,null,null,null,null,null,null);
  sub:Subscription;
  newUser:string;
  flag:boolean=false;
   constructor(public rout:Router,public serUser:UserService){
  
   }
  showDetailRec(){
    this.newUser=JSON.parse(localStorage.getItem("newUser")); 
  if(this.newUser!=null){
 this.rout.navigate(["detailRec",this.recipeSmall.codeRec]);
}
else{
  this.rout.navigate(["allRec"]);
}
  }

  ngOnInit() :void{
  }
  ngOnDestroy():void{

  }
}
