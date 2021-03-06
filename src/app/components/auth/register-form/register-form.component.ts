import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  errorMess: string;

  constructor(public auth: AuthService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  onSubmit() {
    //* submit form
    this.submitted = true;

    this.loading = true;

    this.auth.signUp(this.form.value);
  }

  loginWithGoogle() {
    this.auth.googleSignIn();
  }
}
