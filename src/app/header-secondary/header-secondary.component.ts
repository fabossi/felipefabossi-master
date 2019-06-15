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


  ngOnInit() {

  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }


}
