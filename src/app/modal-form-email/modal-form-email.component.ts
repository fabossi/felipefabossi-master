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

  constructor(private contactService: ContactService) {
    this.subscription = this.contactService.showEmail.subscribe((isActivated) => {
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
    return this.contactService.showEmail.next(active);
  }
}
