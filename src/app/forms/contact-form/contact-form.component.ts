import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

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
  mxlengthTA = 355;
  mxlengthN = 25;
  mxlengthLN = 45;
  initAnimation = false;

  constructor(private authService: AuthService, private route: Router) {
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
    this.contactForm = new FormGroup({
      'nameTextInput': new FormControl('', [Validators.required, Validators.minLength(3),
      Validators.maxLength(this.mxlengthN)]),
      'lastNameTextInput': new FormControl('', [Validators.required, Validators.minLength(3),
      Validators.maxLength(this.mxlengthLN)]),
      'messageTextInput': new FormControl('', [Validators.required, Validators.minLength(4),
      Validators.maxLength(this.mxlengthTA)]),
      'emailTextInput': new FormControl('', [Validators.required, Validators.email]),
    });
    this.initAnimation = true;
  }

  submitInformations() {
    if (this.contactForm.invalid) {
      return;
    }
    this.authService.submitInformations(this.contactForm.value)
      .then(() => {
        this.route.navigate(['/']);
      }).catch(error => {
        if (error) {
          throw Error(error);
        }
      });
  }

  cleanFields() {
    this.contactForm.reset();
  }
}
