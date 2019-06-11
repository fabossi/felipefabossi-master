import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSecondaryComponent } from './header-secondary/header-secondary.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderSecondaryComponent
  },
  {
    path: 'page', loadChildren: './pages/pages.module#PagesModuleComponent'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
