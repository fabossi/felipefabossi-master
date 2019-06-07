import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MywebsitePageComponent } from './pages/mywebsite-page/mywebsite-page.component';
import { HeaderSecondaryComponent } from './header-secondary/header-secondary.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderSecondaryComponent
  },
  {
    path: 'websites',
    component: MywebsitePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
