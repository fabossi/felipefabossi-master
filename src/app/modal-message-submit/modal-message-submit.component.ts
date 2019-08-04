import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-message-submit',
  templateUrl: './modal-message-submit.component.html',
  styleUrls: ['./modal-message-submit.component.scss'],
})

export class ModalMessageSubmitComponent implements OnInit {
  @Output() modalFeedBackEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  private _status: 'SUCCESS' | '400';
  message = '';
  showModal = false;

  constructor() {
  }

  ngOnInit() {
  }

  get status(): 'SUCCESS' | '400' {
    return this._status;
  }

  @Input()
  set status(status: 'SUCCESS' | '400') {
    this._status = status;
    switch (status) {
      case 'SUCCESS':
        this.message = 'Thanks for the contact, your email was sent successfully.';
        break;
      case '400':
        this.message = `Oops, something wrong happened, try again.`;
        break;
    }
  }

  closeModal() {
    this.showModal = !this.showModal;
    this.modalFeedBackEvent.emit(this.showModal);
  }
}
