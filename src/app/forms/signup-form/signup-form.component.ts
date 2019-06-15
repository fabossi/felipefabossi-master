import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmailServiceService } from 'src/app/services/email-service.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  nameTextInput: string;
  lastNameTextInput: string;
  emailTextInput: string;
  messageTextInput: string;
  isLoading = false;
  subscription: Subscription;
  emailRegex = '/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/';

  constructor(private emailService: EmailServiceService) { }

  ngOnInit() {
  }

  submitInformations() {
    this.emailService.submitInformations(this.nameTextInput,
      this.lastNameTextInput, this.emailTextInput, this.messageTextInput).then(data => {
        if (data) {
          this.isLoading = true;
        } else {
          // this.isLoading = false;
          console.error('Fields are Missing!');
          return;
        }
      }).catch(error => {
        if (error) {
          this.isLoading = false;
        }
      });
    this.subscription = this.emailService.getSubmitComplete().subscribe(status => {
      if (status === 'ready') {
        setTimeout(() => {
          this.nameTextInput = '';
          this.lastNameTextInput = '';
          this.emailTextInput = '';
          this.messageTextInput = '';
          this.isLoading = false;
        }, 3000);
      }
    });
  }

}
