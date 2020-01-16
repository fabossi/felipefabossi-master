import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreviousRouteService {

  previousUrl: string;
  currentUrl: string;
  emitUrl = new BehaviorSubject<string>('');

  constructor(private router: Router) {
    console.log(this.router.url);
    this.currentUrl = this.router.url;
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
        this.emitUrl.next(this.previousUrl);
      }
    });
  }


  getPreviousUrl() {
    return this.emitUrl;
  }
}
