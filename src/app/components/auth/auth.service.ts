import {Injectable} from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth'
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/firestore";
import {Observable, of} from "rxjs";
import {switchMap} from "rxjs/operators";
import {User} from './user.model'
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user$: Observable<any>
  user:any

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.afAuth.authState.subscribe(user => {
      this.user = user
    })
    // this.user$ = this.afAuth.authState.pipe(
    //   switchMap(user => {
    //     if (user) {
    //       return this.afs.doc<User>(`users/${user.uid}`).valueChanges()
    //     } else {
    //       return of(null)
    //     }
    //   })
    // )
  }
  async googleSignIn(){
    await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(res => {
        console.log('success')
      }).catch(err => {
        console.log('Error while sign in',err)
      })
  }
  async signOut() {
    await this.afAuth.signOut()
    return this.router.navigate(['/'])
  }
}
