import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { EmailServiceService } from './services/email-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  subscription: Subscription;
  hideToMobile = false;
  isLoading: boolean;
  showFeedback = false;
  _status_feedback: 'SUCCESS' | '400';

  constructor(private emailService: EmailServiceService) {
    if (window.screen.width <= 800) {
      this.hideToMobile = true;
    }
    this.subscription = this.emailService.getItemsReady().subscribe(status => {
      if (status === 'ready') {
        this.isLoading = false;
        this._status_feedback = this.emailService.status;
        setTimeout(() => {
          this.showFeedback = true;
        }, 400);
      } else if (status === 'error') {
        this.isLoading = false;
        this._status_feedback = this.emailService.status;
        setTimeout(() => {
          this.showFeedback = true;
        }, 4200);
      } else if (status === 'waiting') {
        this.isLoading = true;
      }
    });
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
