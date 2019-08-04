import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: "header-secondary",
  templateUrl: "./header-secondary.component.html",
  styleUrls: ["./header-secondary.component.scss"]
})
export class HeaderSecondaryComponent implements OnInit, OnDestroy {
  animate = true;
  animate_languages = false;
  constructor() { }


  ngOnInit() {
    setTimeout(() => {
      this.animate_languages = true;
    }, 100);
  }

  ngOnDestroy() {
  }

  initAnimation(event) {
    if (event) {
      this.animate = !this.animate;
    }
  }

}
