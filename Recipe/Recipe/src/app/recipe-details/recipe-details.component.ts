import { Component,  Input,  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from 'src/moduls/Recipe';
import { RecipeService } from '../Service/recipe.service';
import { User } from 'src/moduls/User';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {
 @Input()
detailRec:Recipe;
  // detailRec:Recipe=new Recipe(null,null,null,null,null,null,);
  arrPreparation:string[];
  userNow:User;
  flag:boolean=false;
  arr:Recipe[];
  constructor(public activ:ActivatedRoute,public ser:RecipeService,public rout:Router) {            
         }
              checkWhoUser(){
                if(this.detailRec.codeSomeEnPr==this.userNow.code)
                return true;
                return false;
             }   
              delRecipe(){
               this.ser.deleteRecipe(this.detailRec.codeRec).subscribe(
                 succ=>{  
                 this.rout.navigate(["allRec"]); 
                 });
              }

  ngOnInit(): void {
    this.activ.params.subscribe(
      x=>this.ser.ShowRecById(x.d).subscribe(
        suc=>{
          this.detailRec=suc;
      //    console.log(this.detailRec);
        }
          ));
//שמירה מיהו הגולד הנוכחי
        this.userNow=JSON.parse(localStorage.getItem("newUser"));
  }
} 
