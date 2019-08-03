import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmailServiceService } from '../services/email-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-modal-form-email',
  templateUrl: './modal-form-email.component.html',
  styleUrls: ['./modal-form-email.component.scss']
})
export class ModalFormEmailComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  constructor(private emailService: EmailServiceService) {
    this.subscription = this.emailService.showEmail.subscribe((isActivated) => {
      if (isActivated) {
        this.closeModal(isActivated);
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  ngOnInit() {
  }

  closeModal(active = true) {
    active = !active;
    return this.emailService.showEmail.next(active);
  }
}
