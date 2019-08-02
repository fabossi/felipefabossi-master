import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { EmailServiceService } from 'src/app/services/email-service.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent {
  nameTextInput: string;
  lastNameTextInput: string;
  emailTextInput: string;
  messageTextInput: string;
  isLoading = false;
  subscription: Subscription;
  opacity = false;
  hasErrors = '';

  constructor(private emailService: EmailServiceService) {
    this.emailService.getItemsReady().subscribe(status => {
      if (status === 'ready') {
        this.cleanFields();
      }
    });
  }


  submitInformations() {
    if (this.emailTextInput == null || this.lastNameTextInput == null
      || this.messageTextInput == null || this.nameTextInput == null) {
      return this.hasErrors = 'fill in all fields';
    } else {
      this.emailService.submitInformations(this.nameTextInput,
        this.lastNameTextInput, this.emailTextInput, this.messageTextInput).then(data => {
          if (data != null || data !== undefined) {
          } else {
            this.hasErrors = 'fill in all fields';
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
    this.emailTextInput = null;
    this.messageTextInput = null;
    this.nameTextInput = null;
    this.lastNameTextInput = null;
  }
}
