import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy, OnInit {
  subscription: Subscription;
  hideToMobile = false;
  initialAnimation = false;

  constructor(private authService: AuthService, private router: Router) {
    if (window.screen.width <= 800) {
      this.hideToMobile = true;
    }
    this.subscription = this.authService.onRequestComplete().subscribe(status => {
      if (status === 'ready') {
        setTimeout(() => {
          this.router.navigate(['auth/feedback']);
        }, 400);
      } else if (status === 'error') {
        setTimeout(() => {
          this.router.navigate(['auth/feedback']);
        }, 400);
      } else if (status === 'waiting') {
      }
    });
  }

  ngOnInit() {
    this.initialAnimation = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onResize(e) {
    if (e.target.innerWidth > 800) {
      this.hideToMobile = false;
    } else {
      this.hideToMobile = true;
    }
  }
}
