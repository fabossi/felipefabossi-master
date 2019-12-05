import { Component, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'header-secondary',
  templateUrl: './header-secondary.component.html',
  styleUrls: ['./header-secondary.component.scss']
})
export class HeaderSecondaryComponent implements AfterViewInit {
  animate = true;
  NodeEvent = false;
  MongoEvent = false;
  PythonEvent = false;
  AngularEvent = false;
  moveBoatToNode = true;
  moveBoatToMongo = true;
  moveBoatToPython = true;
  moveBoatToAngular = true;
  subsAuthStatus: Subscription;

  constructor() {
  }

  ngAfterViewInit() {
    document.documentElement.style.setProperty('--offset-x', '4.5vw');
  }

  initAnimation(event) {
    this.animate = !this.animate;
  }

  checkMongoEvent(element) {
    this.MongoEvent = !this.MongoEvent;
    this.PythonEvent = false;
    this.AngularEvent = false;
    this.NodeEvent = false;
    this.moveBoat(element);
  }

  checkPythonEvent(element) {
    this.PythonEvent = !this.PythonEvent;
    this.MongoEvent = false;
    this.AngularEvent = false;
    this.NodeEvent = false;
    this.moveBoat(element);
  }

  checkNodeEvent(element) {
    this.NodeEvent = !this.NodeEvent;
    this.MongoEvent = false;
    this.AngularEvent = false;
    this.PythonEvent = false;
    this.moveBoat(element);
  }

  checkAngularEvent(element) {
    this.AngularEvent = !this.AngularEvent;
    this.MongoEvent = false;
    this.PythonEvent = false;
    this.NodeEvent = false;
    this.moveBoat(element);
  }

  moveBoat(element: HTMLElement) {
    let sub = document.getElementById('boat-box').clientWidth - document.getElementById('boat').clientWidth;
    sub = sub < 0 ? 0 : sub;
    document.documentElement.style.setProperty('--offset-x',
      `${element.getBoundingClientRect().left - sub
      + (element.getBoundingClientRect().width / 2) - (document.getElementById('boat').clientWidth / 2)}px`);
  }
}
