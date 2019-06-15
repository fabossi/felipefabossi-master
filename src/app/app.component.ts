import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'felipefabossiSite';

  hideToMobile = false;

  constructor() {
    if (window.screen.width <= 800) {
      this.hideToMobile = true;
    }
  }

  onResize(e) {
    if (e.target.innerWidth > 800) {
      this.hideToMobile = false;
    } else {
      this.hideToMobile = true;
    }
  }
}
