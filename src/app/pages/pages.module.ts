import { NgModule } from '@angular/core';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { CareerPageComponent } from './career-page/career-page.component';
import { MywebsitePageComponent } from './mywebsite-page/mywebsite-page.component';
import { PagesRoutingComponent } from './pages.routing';
import { CommonModule } from '@angular/common';
import { ManutComponent } from '../error-pages/manut/manut.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [AboutMePageComponent, CareerPageComponent, MywebsitePageComponent, ManutComponent],
  imports: [PagesRoutingComponent, CommonModule, FontAwesomeModule]
})

export class PagesModuleComponent { }
