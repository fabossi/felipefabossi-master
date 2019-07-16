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
        this.message = 'Obrigado pelo contato, seu e-mail foi enviado com sucesso.';
        break;
      case '400':
        this.message = `Ops, algo de errado aconteceu, tente novamente.`;
        break;
    }
  }

  closeModal() {
    this.showModal = !this.showModal;
    this.modalFeedBackEvent.emit(this.showModal);
  }
}
