import { Component, OnInit, OnDestroy } from '@angular/core';
import openSocket from 'socket.io-client';

@Component({
  selector: "header-secondary",
  templateUrl: "./header-secondary.component.html",
  styleUrls: ["./header-secondary.component.scss"]
})
export class HeaderSecondaryComponent implements OnInit, OnDestroy {
  animate = true;
  haveEvent = false;

  constructor() { }


  ngOnInit() {
  }

  ngOnDestroy() {
  }

  initAnimation(event) {
    if (event) {
      this.animate = !this.animate;
    }
  }

  checkEvent(event) {
    if (event) {
      this.haveEvent = true;
    }
  }

}
