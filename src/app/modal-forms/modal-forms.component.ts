import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ContactService } from '../services/contact-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-forms',
  templateUrl: './modal-forms.component.html',
  styleUrls: ['./modal-forms.component.scss']
})
export class ModalFormsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subscriptionSignup: Subscription;
  subsType: Subscription;
  type: string;

  constructor(private contactService: ContactService, private router: Router) {
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
    this.subsType = this.contactService.type.subscribe((type) => {
      if (type === 'email') {
        this.type = type;
      }
      if (type === 'signup') {
        this.type = type;
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionSignup.unsubscribe();
    this.subsType.unsubscribe();
  }

  ngOnInit() {
  }

  closeModal(active) {
    active = !active;
    if (this.subscription) {
      this.contactService.showEmail.next(active);
    }
    if (this.subscriptionSignup) {
      this.contactService.showSignup.next(active);
    }
    this.router.navigate(['/']);
  }
}
