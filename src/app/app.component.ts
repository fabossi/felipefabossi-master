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
  date = '11/10/2018';

  constructor(private authService: AuthService, private router: Router) {
    if (window.screen.width <= 800) {
      this.hideToMobile = true;
    }
    this.subscription = this.authService.onRequestComplete().subscribe(status => {
      if (status === 'ready') {
        this.router.navigate(['auth/feedback']);
      } else if (status === 'error') {
        this.router.navigate(['auth/feedback']);
      }
    });
  }

  ngOnInit() {
    this.authService.autoAuthUser();
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
