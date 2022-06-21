import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SmallRecipeComponent } from './small-recipe/small-recipe.component';
import { AddRecipeComponent } from './add-recipe/add-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { FormsModule } from '@angular/forms';
import{ HttpClientModule } from '@angular/common/http';
import { TimePipe } from 'src/pipe/time.pipe';
import { AsterisksPipe } from '../pipe/asterisks.pipe';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';

import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
  AllRecipeComponent,
    SmallRecipeComponent,
    AddRecipeComponent,
    RecipeDetailsComponent,
    LoginComponent,
    TimePipe,
    AsterisksPipe,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
