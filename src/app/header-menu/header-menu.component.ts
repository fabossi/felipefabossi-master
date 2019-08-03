import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { EmailServiceService } from '../services/email-service.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  constructor(private emailService: EmailServiceService) { }


  ngOnInit() {
  }

  showEmail() {
    this.emailService.showEmail.next(true);
  }

}
