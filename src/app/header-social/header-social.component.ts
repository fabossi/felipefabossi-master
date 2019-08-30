import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'header-social',
  templateUrl: './header-social.component.html',
  styleUrls: ['./header-social.component.scss']
})
export class HeaderSocialComponent {
  initialAnimation = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart)).
      subscribe((event: NavigationStart) => {
        this.initialAnimation = true;
        setTimeout(() => {
          this.initialAnimation = false;
        }, 955);
      });
  }
}
