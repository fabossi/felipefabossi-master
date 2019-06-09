import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MywebsitePageComponent } from './pages/mywebsite-page/mywebsite-page.component';
import { HeaderSecondaryComponent } from './header-secondary/header-secondary.component';
import { CareerPageComponent } from './pages/career-page/career-page.component';
import { AboutMePageComponent } from './pages/about-me-page/about-me-page.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderSecondaryComponent
  },
  {
    path: 'websites',
    component: MywebsitePageComponent
  },
  {
    path: 'career',
    component: CareerPageComponent
  },
  {
    path: 'about-me',
    component: AboutMePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
