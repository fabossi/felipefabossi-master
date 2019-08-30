import { Component, OnInit, OnDestroy } from '@angular/core';
// import openSocket from 'socket.io-client';

@Component({
  selector: 'header-secondary',
  templateUrl: './header-secondary.component.html',
  styleUrls: ['./header-secondary.component.scss']
})
export class HeaderSecondaryComponent implements OnInit, OnDestroy {
  animate = true;
  MongoEvent = false;
  PythonEvent = false;
  NodeEvent = false;
  AngularEvent = false;
  moveBoatToMongo = false;
  moveBoatToNode = false;
  moveBoatToAngular = false;
  moveBoatToPython = false;

  constructor() {

  }


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
      this.moveBoatToMongo = !this.moveBoatToMongo;
    }
  }

  checkPythonEvent(event) {
    if (event) {
      this.PythonEvent = !this.PythonEvent;
      this.moveBoatToPython = !this.moveBoatToPython;
    }
  }

  checkNodeEvent(event) {
    if (event) {
      this.NodeEvent = !this.NodeEvent;
      this.moveBoatToNode = !this.moveBoatToNode;
    }
  }

  checkAngularEvent(event) {
    if (event) {
      this.AngularEvent = !this.AngularEvent;
      this.moveBoatToAngular = !this.moveBoatToAngular;
    }
  }
}
