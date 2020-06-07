import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})

export class ContactFormComponent implements OnInit {
  isLoading = false;
  subscription: Subscription;
  opacity = false;
  contactForm: FormGroup;
  stausRequest = 'wait';
  regexLetters = '^[ a-zA-Z]+$';
  regexPhone = '\(([0-9]{2}|0{1}((x|[0-9]){2}[0-9]{2}))\)\s*[0-9]{3,4}[- ]*[0-9]{4}';
  onlyLettersMessage = 'Insert at least 3 characters without numbers.';
  cellPhoneIsInvalid = 'Please, insert a valid phone number.';
  validEmailMessage = 'Please, insert a valid email.';
  mxlengthTA = 355;
  mxlengthN = 25;
  mxlengthLN = 45;
  mxlengthPh = 15;
  initAnimation = false;

  constructor(private authService: AuthService, private userService: UserService) {
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
    this.contactForm = new FormGroup({
      nameTextInput: new FormControl('', [Validators.required, Validators.minLength(3),
      Validators.maxLength(this.mxlengthN), Validators.pattern(this.regexLetters)]),
      lastNameTextInput: new FormControl('', [Validators.required, Validators.minLength(3),
      Validators.maxLength(this.mxlengthLN), Validators.pattern(this.regexLetters)]),
      messageTextInput: new FormControl('', [Validators.required, Validators.minLength(4),
      Validators.maxLength(this.mxlengthTA)]),
      emailTextInput: new FormControl('', [Validators.required, Validators.email]),

      telTextInput: new FormControl('', [Validators.required]),
      siteName: new FormControl('', [Validators.required])
    });
    this.initAnimation = true;
    this.userService.getUserInformation(localStorage.getItem('userId'))
      .subscribe((user) => {
        if (user) {
          this.contactForm
            .setValue({
              nameTextInput: user.name,
              lastNameTextInput: user.lastName,
              emailTextInput: user.email,
              messageTextInput: '',
              telTextInput: '',
              siteName: ''
            });
        }
      });
  }

  submitInformations() {
    if (this.contactForm.invalid) {
      return;
    }
    this.authService.submitInformations(this.contactForm.value);
    this.cleanFields();
  }

  cleanFields() {
    this.contactForm.reset();
  }
}
