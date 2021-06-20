import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginFormComponent} from "./components/auth/login-form/login-form.component";
import {RegisterFormComponent} from "./components/auth/register-form/register-form.component";
import {NotFound404Component} from "./components/not-found404/not-found404.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path:'login', component: LoginFormComponent},
  {path:'registration', component: RegisterFormComponent},
  {path:'**', component:NotFound404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
