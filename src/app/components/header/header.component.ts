import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../auth/auth.service";
import {User} from "../auth/user.model";
import firebase from "firebase";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  newUser:User
  constructor(public auth: AuthService,
              public router: Router) { }
  ngOnInit(): void {
    firebase.auth().onAuthStateChanged(user => {
      this.newUser = user
      this.router.navigate(['/'])
    })
  }
}
