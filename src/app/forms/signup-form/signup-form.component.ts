import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmailServiceService } from 'src/app/services/email-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  isLoading = false;
  subscription: Subscription;
  opacity = false;
  signupForm: FormGroup;
  stausRequest = 'wait';
  mxlengthTA = 355;
  mxlengthN = 25;
  mxlengthLN = 45;

  constructor(private emailService: EmailServiceService) {
    this.emailService.getItemsReady().subscribe(status => {
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
      'messageTextInput': new FormControl('', [Validators.required, Validators.minLength(4),
      Validators.maxLength(this.mxlengthTA)]),
      'emailTextInput': new FormControl('', [Validators.required, Validators.email]),
    });
  }

  submitInformations() {
    if (this.signupForm.invalid) {
      throw new Error('Fill all fields');
    } else {
      console.log(this.signupForm);
      this.emailService.submitInformations(this.signupForm.value).then().catch(error => {
        if (error) {
          throw Error(error);
        }
      });
    }
  }

  cleanFields() {
    this.signupForm.reset();
  }
}
