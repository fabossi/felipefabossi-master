import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { PreviousRouteService } from '../services/previous-route.service';

@Component({
  selector: 'app-modal-message-submit',
  templateUrl: './modal-message-submit.component.html',
  styleUrls: ['./modal-message-submit.component.scss'],
})

export class ModalMessageSubmitComponent implements OnInit, OnDestroy {
  subsFeedback: Subscription;
  show: boolean;
  message: string;

  constructor(private authService: AuthService, private router: Router, private routerService: PreviousRouteService) {
    this.subsFeedback = this.authService.showModal.subscribe((show) => {
      if (show) {
        this.closeModal(show);
      }
    });
    if (this.authService.errorMessage !== null || this.authService.errorMessage !== undefined) {
      this.message = this.authService.errorMessage;
    }
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subsFeedback.unsubscribe();
  }

  closeModal(show) {
    this.show = !show;
    this.authService.showModal.next(this.show);
    if (this.routerService.getPreviousUrl() !== '') {
      this.router.navigate([this.routerService.getPreviousUrl()]);
    }
    this.router.navigate(['/']);
  }
}
