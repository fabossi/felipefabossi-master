import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-modal-forms',
  templateUrl: './modal-forms.component.html',
  styleUrls: ['./modal-forms.component.scss']
})
export class ModalFormsComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  subscriptionSignup: Subscription;
  active: boolean;
  subsType: Subscription;
  type: string;

  constructor(private authService: AuthService, private router: Router) {
    this.subscription = this.authService.showModal.subscribe((isActivated) => {
      if (isActivated) {
        this.active = isActivated;
      }
    });
    this.subscriptionSignup = this.authService.showModal.subscribe((signUpActive) => {
      if (signUpActive) {
        this.active = signUpActive;
      }
    });
    this.subsType = this.authService.type.subscribe((type) => {
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

  closeModal() {
    this.active = !this.active;
    if (this.subscription) {
      this.authService.showModal.next(this.active);
    }
    if (this.subscriptionSignup) {
      this.authService.showModal.next(this.active);
    }
    this.router.navigate(['/']);
  }
}
