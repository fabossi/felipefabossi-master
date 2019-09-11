import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  initAnimation = false;
  subscription: Subscription;
  loginForm: FormGroup;
  isLoading = false;
  opacity = false;
  stausRequest = 'wait';
  mxlengthTA = 355;
  mxlengthN = 25;
  mxlengthLN = 45;
  see_password = false;

  constructor(private authService: AuthService, private route: Router) {
    this.authService.onRequestComplete().subscribe(status => {
      if (status === 'ready') {
        this.stausRequest = status;
      } else if (status === 'waiting') {
        this.stausRequest = status;
      } else if (status === 'error') {
        this.stausRequest = status;
      }
    });
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'emailTextInput': new FormControl('', [Validators.required, Validators.email]),
      'passwordTextInput': new FormControl('', [Validators.required, Validators.minLength(3),
      Validators.maxLength(this.mxlengthN)]),
    });
    this.initAnimation = true;
  }

  onLogin() {
    if (this.loginForm.invalid) {
      return;
    }
    this.authService
      .login(this.loginForm
        .get('emailTextInput').value,
        this.loginForm.get('passwordTextInput').value)
      .catch(error => { throw new Error(error); });
  }

  seePassword() {
    this.see_password = !this.see_password;
  }

  backtoSignup() {
    this.authService.type.next('signup');
  }
}
