import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  isLoading = false;
  subscription: Subscription;
  opacity = false;
  signupForm: FormGroup;
  stausRequest = 'wait';
  mxlengthTA = 355;
  mxlengthN = 25;
  mxlengthLN = 45;
  initAnimation = false;

  constructor(private authService: AuthService) {
    this.authService.onRequestComplete().subscribe(status => {
      if (status === 'ready') {
        this.stausRequest = status;
        this.cleanFields();
      } else if (status === 'waiting') {
        this.stausRequest = status;
      } else if (status === 'error') {
        this.stausRequest = status;
      }
    });
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'nameTextInput': new FormControl('', [Validators.required, Validators.minLength(3),
      Validators.maxLength(this.mxlengthN)]),
      'lastNameTextInput': new FormControl('', [Validators.required, Validators.minLength(3),
      Validators.maxLength(this.mxlengthLN)]),
      'emailTextInput': new FormControl('', [Validators.required, Validators.email]),
      'messageTextInput': new FormControl('', [Validators.required, Validators.minLength(4),
      Validators.maxLength(this.mxlengthTA)]),
      'passwordTextInput': new FormControl('', [Validators.required]),
    });
    this.initAnimation = true;
  }

  cleanFields() {
    this.signupForm.reset();
  }

}
