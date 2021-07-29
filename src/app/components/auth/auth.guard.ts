import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "./auth.service";
import {map, take, tap} from "rxjs/operators";
import {loggedIn} from "@angular/fire/auth-guard";
import {MatDialog} from "@angular/material/dialog";
import {UserShouldToLoginComponent} from "../Dialogs/user-should-to-login/user-should-to-login.component";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService,
              private router:Router,
              private dialog: MatDialog) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.authStatus.pipe(
      take(1),
      map(user => !!user),
      tap(loggedIn => {
        if (!loggedIn) {
          this.dialog.open(UserShouldToLoginComponent)
          // this.router.navigate(['/login'])
        }
      })
    )
  }

}
