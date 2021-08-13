import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {LoginFormComponent} from "./components/auth/login-form/login-form.component";
import {RegisterFormComponent} from "./components/auth/register-form/register-form.component";
import {NotFound404Component} from "./components/not-found404/not-found404.component";
import {AuthGuard} from "./components/auth/auth.guard";

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [AuthGuard]},
  {path:'login', component: LoginFormComponent},
  {path:'registration', component: RegisterFormComponent},
  {path:'**', component:NotFound404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routerComponents = [HomeComponent,LoginFormComponent, RegisterFormComponent, NotFound404Component]
