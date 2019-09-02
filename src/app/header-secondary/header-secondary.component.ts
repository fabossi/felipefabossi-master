import { Component } from '@angular/core';
// import openSocket from 'socket.io-client';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'header-secondary',
  templateUrl: './header-secondary.component.html',
  styleUrls: ['./header-secondary.component.scss']
})
export class HeaderSecondaryComponent {
  animate = true;
  MongoEvent = false;
  PythonEvent = false;
  NodeEvent = false;
  AngularEvent = false;
  moveBoatToMongo = true;
  moveBoatToNode = true;
  moveBoatToAngular = true;
  moveBoatToPython = true;
  mongoSize = 0;
  pythonSize = 0;
  angularSize = 0;
  nodeSize = 0;

  constructor() {

  }

  initAnimation(event) {
    this.animate = !this.animate;
  }

  checkMongoEvent(element) {
    this.MongoEvent = !this.MongoEvent;
    // this.mongoSize = element.getBoundingClientRect().left;
    document.documentElement.style.setProperty('--offset-x',
      `${element.getBoundingClientRect().left + window.scrollX}px`);
  }

  checkPythonEvent(element) {
    this.PythonEvent = !this.PythonEvent;
    // this.pythonSize = element.getBoundingClientRect().left;
    document.documentElement.style.setProperty('--offset-x',
      `${element.getBoundingClientRect().left + window.scrollX}px`);
  }

  checkNodeEvent(element) {
    this.NodeEvent = !this.NodeEvent;
    console.log(element.getBoundingClientRect().left);
    console.log('Node', element.getBoundingClientRect());
    // this.nodeSize = element.getBoundingClientRect().left;
    document.documentElement.style.setProperty('--offset-x',
      `${element.getBoundingClientRect().left + window.scrollX}px`);
  }

  checkAngularEvent(element) {
    this.AngularEvent = !this.AngularEvent;
    document.documentElement.style.setProperty('--offset-x',
      `${element.getBoundingClientRect().left + window.scrollX}px`);
  }
}
