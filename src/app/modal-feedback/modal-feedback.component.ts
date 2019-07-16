import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-feedback',
  templateUrl: './modal-feedback.component.html',
  styleUrls: ['./modal-feedback.component.scss']
})
export class ModalFeedbackComponent implements OnInit {
  _status: 'ERROR' | 'LOADING';
  _isLoading: true | false;

  constructor() { }

  ngOnInit() {
  }

  get status(): 'ERROR' | 'LOADING' {
    return this._status;
  }

  @Input()
  set status(status: 'ERROR' | 'LOADING') {
    this._status = status;
    switch (status) {
      case 'LOADING':
        this.isLoading = true;
        break;
      default:
        break;
    }
  }

  get isLoading(): true | false {
    return this.isLoading;
  }

  @Input()
  set isLoading(isLoading: true | false) {
    this._isLoading = isLoading;
    switch (status) {
      case 'LOADING':
        this.isLoading = true;
        break;
      default:
        break;
    }
  }

}
