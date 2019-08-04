import { Component, OnInit } from '@angular/core';
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
  hasErrors = false;
  signupForm: FormGroup;
  stausRequest = 'wait';
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
      'nameTextInput': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'lastNameTextInput': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'emailTextInput': new FormControl(null, [Validators.required, Validators.email]),
      'messageTextInput': new FormControl(null, [Validators.required, Validators.minLength(4)]),
    });
  }


  submitInformations() {
    if (this.signupForm.invalid) {
      return this.hasErrors = true;
    } else {
      this.emailService.submitInformations(this.signupForm.value).then(data => {
        if (data != null || data !== undefined) {
        } else {
          this.hasErrors = true;
          console.error('Fields are Missing!');
        }
      }).catch(error => {
        if (error) {
          console.error(error);
        }
      });
    }
  }

  cleanFields() {
    this.signupForm.reset();
  }
}
