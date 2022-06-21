import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/moduls/Recipe';
import { RecipeService } from '../Service/recipe.service';
import { UserService } from '../Service/user.service';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss']
})
export class AddRecipeComponent {
  
  emptyRecipe: Recipe = new Recipe(null, null, null, null, null, null, [""], [""], null, null);
  arrC: Recipe[];
  arrCategory:string[]=["milkly","parve","sweeter"];
  arrPreparation=[""];
  arrListComp=[""];

  constructor(public recServer: RecipeService,public rout:Router,public activ:ActivatedRoute,public userSer:UserService) {
  }
  // add() {
  //   this.userSer.newUser.subscribe(x=>{
  //     this.emptyRecipe.codeSomeEnPr=x.code;
  //     this.emptyRecipe.arrListComp.splice(this.emptyRecipe.arrListComp.length-1,1);
  //     this.emptyRecipe.arrPreparation.splice(this.emptyRecipe.arrPreparation.length-1,1);
  //     this.recServer.addRec(this.emptyRecipe).subscribe(succes => {
  //     alert("the recipe add in successful!! ");
  //     this.rout.navigate(["allRec"]);
  //     },
  //       error => {
  //         console.log("error in add reciepe!!  "+error);
  //       })
  //   })}
    add() {
      this.recServer.addRec(this.emptyRecipe).subscribe(succes => {
        console.log(succes);
      },
        error => {
          console.log(error);
        })
    }
  
  clearTidy() {
    this.emptyRecipe.arrPreparation.forEach((p, ind) => {
      if (p =="") 
        this.emptyRecipe.arrPreparation.splice(ind, 1);
    });
    this.emptyRecipe.arrPreparation.push("");
  }

  clearTidy2() {
    this.emptyRecipe.arrListComp.forEach((p, ind) => {
      if (p == "")
        this.emptyRecipe.arrListComp.splice(ind, 1); 
    });
    this.emptyRecipe.arrListComp.push("");
  }

  trackByIdx(index: number, obj: any): any {
    return index;
  }

}
