import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {AuthService} from "../auth.service";
import {fromEvent} from "rxjs";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    public auth:AuthService
  ) {
  }
  loginWithGoogle() {
    this.auth.googleSignIn()
  }
  // loginWithGitHub() {
  //   this.auth.githubSignIn()
  // }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.auth.signIn(this.f.email.value,this.f.password.value)
    console.log('login work', this.f.email.value, this.f.password.value)
  }

}
