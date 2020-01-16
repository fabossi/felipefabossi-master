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
  message: string;
  previousUrl: string;
  shake = false;
  redirectURL = '';

  constructor(private authService: AuthService, private router: Router, private routeService: PreviousRouteService) {
    this.subsFeedback = this.routeService.getPreviousUrl().subscribe((url) => {
      this.previousUrl = url;
    });
    this.subsFeedback = this.authService.onRequestComplete().subscribe((requestStatus) => {
      if (requestStatus === 'error') {
        this.message = this.authService.errorMessage;
        this.redirectURL = this.previousUrl;
        console.log(this.redirectURL);
      } else if (requestStatus === 'ready') {
        this.message = this.authService.succesfullyMessage;
        this.redirectURL = '/';
      }
    });
  }

  ngOnInit() {
    this.shake = true;
    const svg = document.querySelector('svg');
    setTimeout(() => {
      svg.classList.add('active');
    }, 130);
  }

  ngOnDestroy() {
    this.subsFeedback.unsubscribe();
  }

  closeModal() {
    this.router.navigate([this.redirectURL]);
    console.log(this.redirectURL);
  }
}
