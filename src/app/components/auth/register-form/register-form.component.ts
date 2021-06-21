import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  errorMess: string

  constructor(private formBuilder: FormBuilder,
              public auth: AuthService) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() { //* submit form
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.loading = true;
    if (window.alert) {
      this.loading = false;
    }
    this.auth.signUp(this.registerForm.value)
  }

  loginWithGoogle() {
    this.auth.googleSignIn()
  }

  // loginWithGitHub() {
  //   this.auth.githubSignIn()
  // }
  // loginWithFacebook() {
  //   this.auth.facebookSignIn()
  // }
}
