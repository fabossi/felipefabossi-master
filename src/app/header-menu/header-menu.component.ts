import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {
  RLH = '';
  RLWB = '/page/websites';
  RLSK = '/page/skills';
  RLCR = '/page/career';
  RLAM = '/page/about-me';
  subsLogin: Subscription;
  isLoggedin = false;
  constructor(private authService: AuthService) {
    this.subsLogin = this.authService
      .getAuthStatusListener()
      .subscribe((isAuthenticated) => {
        this.isLoggedin = isAuthenticated;
      });
  }

  ngOnInit() {
  }

  showEmail() {
    this.authService.type.next('email');
  }

  showLogin() {
    this.authService.type.next('login');
  }

  logout() {
    this.authService.logout();
  }
}
