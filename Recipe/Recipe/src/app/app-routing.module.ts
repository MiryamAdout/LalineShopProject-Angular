import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { AppComponent } from './app.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { Pipe, PipeTransform } from '@angular/core'; 
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
{path:"navEn",component:AppComponent},
{path:"allRec",component:AllRecipeComponent,},
{path:"smallRec",component:SmallRecipeComponent},
{path:"addRec",component:AddRecipeComponent},
{path:"detailRec/:d",component:RecipeDetailsComponent},
{path:"regis/:l",component:RegisterComponent},
{path:"login",component:LoginComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
