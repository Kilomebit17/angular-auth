import {Injectable} from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth'
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {ErrorsComponent} from "../Dialogs/errors/errors.component";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authStatus:any;
  public wrongMess!:string
  public wrong:boolean = false
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private dialog:MatDialog

  ) {
    this.authStatus = this.afAuth.authState

  }


  async signIn(email:string,password:string) { //! вход чере почту
    await this.afAuth.signInWithEmailAndPassword(email,password)
      .then(res => localStorage.setItem('user',JSON.stringify(res.user))) //* сохраняем данные в localstorage
      .catch(err => {
        this.wrongMess = err.message
        this.wrong = true
        this.dialog.open(ErrorsComponent)
      })//* в случаи ошибки выводим все в alert
  }

  async signUp({email, password}) { //! регестрация через почту
    await this.afAuth.createUserWithEmailAndPassword(email,password)
      .then(res => localStorage.setItem('user',JSON.stringify(res.user))) //* сохраняем данные в localstorage
      .catch(err => {
        this.wrongMess = err.message
        this.dialog.open(ErrorsComponent)
      })//* в случаи ошибки выводим все в alert
  }

  async githubSignIn() { //? вход чере github | not working...
    await this.afAuth.signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then(res => console.log('github signIn success'))
      .catch(err => alert(err.message))
  }

  async facebookSignIn() { //? вход чере facebook | not working...
    await this.afAuth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        console.log('facebook signIn success')
      }).catch(err => alert(err.message))
  }

  async googleSignIn(){ //! вход через google
    await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((res) => console.log('success')).catch(err => alert(err.message))
  }
  async signOut() { //! выход из акаунта
    await this.afAuth.signOut()
    localStorage.removeItem('user') //* удаление из localstorage юзера
    return this.router.navigate(['/login']) //* редирект на login
  }

}
