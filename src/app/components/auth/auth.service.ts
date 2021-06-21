import {Injectable} from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/auth'
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from "@angular/fire/firestore";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  authStatus:any;
  wrongMess:any
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.authStatus = this.afAuth.authState

  }


  async signIn(email:string,password:string) { //! вход чере почту
    await this.afAuth.signInWithEmailAndPassword(email,password)
      .then(res => localStorage.setItem('user',JSON.stringify(res.user))) //* сохраняем данные в localstorage
      .catch(err => alert(err.message))//* в случаи ошибки выводим все в alert
  }


  async signUp({email, password}) { //! регестрация через почту
    await this.afAuth.createUserWithEmailAndPassword(email,password)
      .then(res => localStorage.setItem('user',JSON.stringify(res.user))) //* сохраняем данные в localstorage
      .catch(err => alert(err.message))//* в случаи ошибки выводим все в alert
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
    return this.router.navigate(['/login']) //* редирект на главную
  }

}
