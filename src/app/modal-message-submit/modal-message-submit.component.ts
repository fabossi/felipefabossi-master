import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-message-submit',
  templateUrl: './modal-message-submit.component.html',
  styleUrls: ['./modal-message-submit.component.scss'],
})

export class ModalMessageSubmitComponent implements OnInit, OnDestroy {
  subsFeedback: Subscription;
  show: boolean;

  constructor(private authService: AuthService, private router: Router) {
    this.subsFeedback = this.authService.showModal.subscribe((show) => {
      if (show) {
        this.closeModal(show);
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subsFeedback.unsubscribe();
  }

  closeModal(show) {
    this.show = !show;
    this.authService.showModal.next(this.show);
    this.router.navigate(['/']);
  }

}
