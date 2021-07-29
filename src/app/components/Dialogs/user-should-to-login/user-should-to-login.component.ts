import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-should-to-login',
  templateUrl: './user-should-to-login.component.html',
  styleUrls: ['./user-should-to-login.component.scss']
})
export class UserShouldToLoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  redirect() {
    this.router.navigate(['/login'])
  }
}
