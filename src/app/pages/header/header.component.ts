import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../components/auth/auth.service';
import { User } from '../../components/auth/user.model';
import firebase from 'firebase';
import { Router } from '@angular/router';
import { map, take, tap } from 'rxjs/operators';
import { loggedIn } from '@angular/fire/auth-guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  newUser: User;
  ifPhotoNotFound: string =
    'https://cdn4.iconfinder.com/data/icons/small-color-v2/512/account_avatar_client_man_user-512.png';
  constructor(public auth: AuthService, public router: Router) {}

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      this.newUser = user;
      this.router.navigate(['/']);
    });
  }
}
