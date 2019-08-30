import { Component, OnInit, OnDestroy } from '@angular/core';
// import openSocket from 'socket.io-client';

@Component({
  // tslint:disable-next-line: component-selector
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
  moveBoatToMongo = true;
  moveBoatToNode = true;
  moveBoatToAngular = true;
  moveBoatToPython = true;
  offSetX = 0;
  mongoSize = 0;
  pythonSize = 0;
  angularSize = 0;
  nodeSize = 0;

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

  checkMongoEvent(event, element) {
    this.MongoEvent = !this.MongoEvent;
    this.mongoSize = element.getBoundingClientRect().left;
    document.documentElement.style.setProperty('--offset-x',
      `${element.getBoundingClientRect().left + window.scrollX}pt`);
  }

  checkPythonEvent(event, element) {
    this.PythonEvent = !this.PythonEvent;
    this.pythonSize = element.getBoundingClientRect().left;
    document.documentElement.style.setProperty('--offset-x',
      `${element.getBoundingClientRect().left + window.scrollX}pt`);
  }

  checkNodeEvent(event, element) {
    this.NodeEvent = !this.NodeEvent;
    console.log('Node', element.getBoundingClientRect());
    this.nodeSize = element.getBoundingClientRect().left;
    document.documentElement.style.setProperty('--offset-x',
      `${element.getBoundingClientRect().left + window.scrollX}pt`);
  }

  checkAngularEvent(event, element) {
    this.AngularEvent = !this.AngularEvent;
    document.documentElement.style.setProperty('--offset-x',
      `${element.getBoundingClientRect().left + window.scrollX}pt`);
  }
}
