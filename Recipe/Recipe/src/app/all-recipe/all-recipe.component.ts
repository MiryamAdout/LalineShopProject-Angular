import { Component, OnInit ,Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/moduls/Recipe';
import { User } from 'src/moduls/User';
import { RecipeService } from '../Service/recipe.service';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-all-recipe',
  templateUrl: './all-recipe.component.html',
  styleUrls: ['./all-recipe.component.scss']
})
export class AllRecipeComponent implements OnInit {
  nameUserNow:User=new User(null,null,null,null,null);
  arrCat:string[]=["חלבי","פרווה","מתוקים"];
  arrRecipes:Recipe[];
  arrRecipeSinun:Recipe[]=[];
  arrRecipeSinunHelp:Recipe[];
  nameUser:User=new User(null,null,null,null,null);
  emptyRecipe:Recipe= new Recipe(null, null, null, null, null, null, ["",""], ["",""], null, null);
constructor(public recServer:RecipeService,public activ:ActivatedRoute,private userSer: UserService){ 
}
  ngOnInit(): void {
   
    this.activ.params.subscribe(
      x=>this.recServer.ShowRecById(x.d).subscribe(
        suc=>this.emptyRecipe=suc));
  this.recServer.ShowAllRecipe().subscribe(succes=>{
    this.arrRecipes=succes;
    this.arrRecipeSinun=succes;
  },
  error=>{
    console.log(error);
  })
  }
  checkNameUser(){
    this.nameUserNow=JSON.parse(localStorage.getItem("newUser"));
    if(this.nameUserNow==null)
    return false;
    return true;
  }
filterTime(time){
   this.arrRecipeSinunHelp=this.arrRecipeSinun;
   this.arrRecipeSinun=[] ;
   let ind:number;
   for(ind=0;ind<this.arrRecipeSinunHelp.length;ind++){
   if(this.arrRecipeSinunHelp[ind].timePreMinu<=time)
   this.arrRecipeSinun.push(this.arrRecipeSinunHelp[ind]);
  }}

  filterLevel(level){
     this.arrRecipeSinunHelp=this.arrRecipeSinun;
     this.arrRecipeSinun=[] ;
     let ind:number;
     for(ind=0;ind<this.arrRecipeSinunHelp.length;ind++){
     if(this.arrRecipeSinunHelp[ind].levelDif<=level)
     this.arrRecipeSinun.push(this.arrRecipeSinunHelp[ind]);
     }
  }
  filterCat(cat){
     this.arrRecipeSinunHelp=this.arrRecipeSinun;
     this.arrRecipeSinun=[] ;
     let ind:number,codeCat:number;
     for(ind=0;ind<this.arrRecipeSinunHelp.length;ind++){
   if(this.arrRecipeSinunHelp[ind].codeCateg==cat)
     this.arrRecipeSinun.push(this.arrRecipeSinunHelp[ind]);
     }   
  }
  clearFilter(time,level,cat){
this.arrRecipeSinun=[];
this.arrRecipeSinunHelp=[];
this.arrRecipeSinun=this.recServer.arrAllRecipes;
  }

}

 


