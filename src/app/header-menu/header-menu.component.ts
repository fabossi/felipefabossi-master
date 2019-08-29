import { Component, OnInit } from '@angular/core';
import { EmailServiceService } from '../services/email-service.service';

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
  constructor(private emailService: EmailServiceService) { }


  ngOnInit() {
  }

  showEmail() {
    this.emailService.showEmail.next(true);
  }

}
