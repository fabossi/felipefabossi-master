import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


library.add(faEye, faEyeSlash);
dom.watch();

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
  see_password = false;

  constructor(private authService: AuthService) {
    this.authService.onRequestComplete().subscribe(status => { });
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'nameTextInput': new FormControl('', [Validators.required, Validators.minLength(3),
      Validators.maxLength(this.mxlengthN)]),
      'lastNameTextInput': new FormControl('', [Validators.required, Validators.minLength(3),
      Validators.maxLength(this.mxlengthLN)]),
      'emailTextInput': new FormControl('', [Validators.required, Validators.email]),
      'passwordTextInput': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'passwordConfirmTextInput': new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
    this.initAnimation = true;
  }

  cleanFields() {
    this.signupForm.reset();
  }

  onSignUp() {
    this.authService.signup(this.signupForm.get('nameTextInput').value, this.signupForm.get('lastNameTextInput').value,
      this.signupForm.get('emailTextInput').value, this.signupForm.get('passwordTextInput').value)
      .then()
      .catch(error => console.error(error));
    this.signupForm.reset();
  }

  seePassword() {
    this.see_password = !this.see_password;
  }

}
