import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import * as fileSaver from 'file-saver';

@Component({
  selector: 'app-career-page',
  templateUrl: './career-page.component.html',
  styleUrls: ['./career-page.component.scss']
})
export class CareerPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }

  public downloadHtml() {
    this.userService.getHtmlFile().then((data: File) => {
      const blob = new Blob([data], { type: 'application/json' });
      // const url = window.URL.createObjectURL(blob);
      // window.open(url);
      fileSaver.saveAs(blob, 'index.html');
    }).catch((err) => {
      console.error(err);
    });
  }

  public downloadCSS() {
    this.userService.getCSSFile().then((data: File) => {
      const blob = new Blob([data], { type: 'application/json' });
      // const url = window.URL.createObjectURL(blob);
      // window.open(url);
      fileSaver.saveAs(blob, 'styles.css');
    }).catch((err) => {
      console.error(err);
    });
  }

  public downloadJS() {
    this.userService.getJSFile().then((data: File) => {
      const blob = new Blob([data], { type: 'application/json' });
      // const url = window.URL.createObjectURL(blob);
      // window.open(url);
      fileSaver.saveAs(blob, 'index.js');
    }).catch((err) => {
      console.error(err);
    });
  }

}
