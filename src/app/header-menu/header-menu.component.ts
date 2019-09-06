import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact-service.service';

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
  constructor(private contactService: ContactService) { }


  ngOnInit() {
  }

  showEmail() {
    this.contactService.showEmail.next(true);
  }

  showSignup() {
    this.contactService.showSignup.next(true);
  }
}
