import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from 'src/moduls/Recipe';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  baseUrl="https://localhost:44351/api/Recipe"

arrAllRecipes:Recipe[];

addRec(r:Recipe){
  return this.myHttp.post(this.baseUrl,r);
  }
ShowAllRecipe(){
  return this.myHttp.get<Recipe[]>("https://localhost:44351/api/Recipe");
}
ShowRecById(c){
  return this.myHttp.get<Recipe>("https://localhost:44351/api/Recipe?id="+c);
}
deleteRecipe(c){
  return this.myHttp.delete<Recipe>("https://localhost:44351/api/Recipe?id="+c);
}

updateRecipe(c,r:Recipe){
  return this.myHttp.put("https://localhost:44351/api/Recipe?codeRec="+c,r);
}

  constructor(public myHttp:HttpClient) {
    this.ShowAllRecipe().subscribe(x=>{
      this.arrAllRecipes=x;
    })
   }
}
