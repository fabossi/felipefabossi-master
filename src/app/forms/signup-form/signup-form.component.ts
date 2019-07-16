import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmailServiceService } from 'src/app/services/email-service.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit, OnDestroy {
  nameTextInput: string;
  lastNameTextInput: string;
  emailTextInput: string;
  messageTextInput: string;
  isLoading = false;
  subscription: Subscription;
  opacity = false;
  hasErrors = false;
  emailRegex = '/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/';

  constructor(private emailService: EmailServiceService) {
    this.opacity = true;
    this.subscription = this.emailService.getSubmitComplete().subscribe(status => {
      if (status === 'ready') {
        setTimeout(() => {
          this.nameTextInput = '';
          this.lastNameTextInput = '';
          this.emailTextInput = '';
          this.messageTextInput = '';
          this.isLoading = false;
        }, 4000);
      } else if (status === 'waiting') {
        this.isLoading = true;
      } else if (status === 'error') {
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
        }, 4000);
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  submitInformations() {
    this.emailService.submitInformations(this.nameTextInput,
      this.lastNameTextInput, this.emailTextInput, this.messageTextInput).then(data => {
        if (data || data != null || data !== undefined) {
          this.hasErrors = false;
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
