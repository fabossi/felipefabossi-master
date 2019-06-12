import { Component, OnInit } from "@angular/core";
import { EmailServiceService } from '../services/email-service.service';

@Component({
  selector: "header-secondary",
  templateUrl: "./header-secondary.component.html",
  styleUrls: ["./header-secondary.component.scss"]
})
export class HeaderSecondaryComponent implements OnInit {

  nameTextInput: string;
  lastNameTextInput: string;
  emailTextInput: string;
  messageTextInput: string;

  constructor(private emailService: EmailServiceService) { }

  ngOnInit() {

  }

  submitInformations() {
    this.emailService.submitInformations(this.nameTextInput,
      this.lastNameTextInput, this.emailTextInput, this.messageTextInput).then(data => {
        if (data) {
          console.log(data);
        } else {
          console.error('algo esta vazio');
        }
      }).catch(error => {
        if (error) {
          console.error(error);
        }
      });
  }
}
