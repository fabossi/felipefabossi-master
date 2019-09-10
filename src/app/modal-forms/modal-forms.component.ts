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
  active: boolean;
  type: string;

  constructor(private authService: AuthService, private router: Router) {
    this.subscription = this.authService.type.subscribe((type) => {
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
  }

  ngOnInit() {
  }

  closeModal() {
    this.active = !this.active;
    this.authService.type.next('');
    this.router.navigate(['/']);
  }
}
