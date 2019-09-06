import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../services/contact-service.service';

@Component({
  selector: 'app-modal-form-email',
  templateUrl: './modal-form-email.component.html',
  styleUrls: ['./modal-form-email.component.scss']
})
export class ModalFormEmailComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subscriptionSignup: Subscription;
  constructor(private contactService: ContactService) {
    this.subscription = this.contactService.showEmail.subscribe((isActivated) => {
      if (isActivated) {
        this.closeModal(isActivated);
      }
    });
    this.subscriptionSignup = this.contactService.showSignup.subscribe((signUpActive) => {
      if (signUpActive) {
        this.closeModal(signUpActive);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionSignup.unsubscribe();
  }

  ngOnInit() {
  }

  closeModal(active = true) {
    active = !active;
    if (this.subscription) {
      this.contactService.showEmail.next(active);
    }
    if (this.subscriptionSignup) {
      this.contactService.showSignup.next(active);
    }
  }
}
