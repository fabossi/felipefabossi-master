import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmailServiceService } from './services/email-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy {
  subscription: Subscription;
  subscriptionModal: Subscription;
  hideToMobile = false;
  isLoading: boolean;
  showFeedback = false;
  showModal = false;
  _status_feedback: 'SUCCESS' | '400';

  constructor(private emailService: EmailServiceService) {
    if (window.screen.width <= 800) {
      this.hideToMobile = true;
    }
    this.subscription = this.emailService.getItemsReady().subscribe(status => {
      if (status === 'ready') {
        this.showModal = false;
        this._status_feedback = this.emailService.status;
        setTimeout(() => {
          this.showFeedback = true;
        }, 400);
      } else if (status === 'error') {
        this.showModal = false;
        this._status_feedback = this.emailService.status;
        setTimeout(() => {
          this.showFeedback = true;
        }, 400);
      } else if (status === 'waiting') {
        this.showModal = true;
      }
    });
    this.subscriptionModal = this.emailService.showEmail.subscribe((showModal) => {
      this.showModal = showModal;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.subscriptionModal.unsubscribe();
  }

  onResize(e) {
    if (e.target.innerWidth > 800) {
      this.hideToMobile = false;
    } else {
      this.hideToMobile = true;
    }
  }

  askFeedback(event: Event) {
    if (event) {
      this.showFeedback = false;
    } else {
      this.showFeedback = true;
    }
  }
}
