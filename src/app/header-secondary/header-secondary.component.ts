import { Component, OnInit, OnDestroy } from '@angular/core';
// import openSocket from 'socket.io-client';

@Component({
  selector: "header-secondary",
  templateUrl: "./header-secondary.component.html",
  styleUrls: ["./header-secondary.component.scss"]
})
export class HeaderSecondaryComponent implements OnInit, OnDestroy {
  animate = true;
  MongoEvent = false;
  PythonEvent = false;
  NodeEvent = false;
  AngularEvent = false;

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

  checkMongoEvent(event) {
    if (event) {
      this.MongoEvent = !this.MongoEvent;
    }
  }

  checkPythonEvent(event) {
    if (event) {
      this.PythonEvent = !this.PythonEvent;
    }
  }
  checkNodeEvent(event) {
    if (event) {
      this.NodeEvent = !this.NodeEvent;
    }
  }
  checkAngularEvent(event) {
    if (event) {
      this.AngularEvent = !this.AngularEvent;
    }
  }

}
