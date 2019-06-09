import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMePageComponent } from './about-me-page/about-me-page.component';
import { MywebsitePageComponent } from './mywebsite-page/mywebsite-page.component';
import { CareerPageComponent } from './career-page/career-page.component';


const routes: Routes = [
  {
    path: 'about-me',
    component: AboutMePageComponent
  },
  {
    path: 'websites',
    component: MywebsitePageComponent
  },
  {
    path: 'career',
    component: CareerPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class PagesRoutingComponent { }
