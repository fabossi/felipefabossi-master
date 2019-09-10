import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

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
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  showEmail() {
    this.authService.type.next('email');
  }

  showSignup() {
    this.authService.type.next('signup');
  }
}
