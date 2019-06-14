import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmailServiceService } from '../services/email-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "header-secondary",
  templateUrl: "./header-secondary.component.html",
  styleUrls: ["./header-secondary.component.scss"]
})
export class HeaderSecondaryComponent implements OnInit, OnDestroy {

  constructor(private emailService: EmailServiceService) { }

  nameTextInput: string;
  lastNameTextInput: string;
  emailTextInput: string;
  messageTextInput: string;
  isLoading = false;
  subscription: Subscription;
  emailRegex = '/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/';

  ngOnInit() {

  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
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
