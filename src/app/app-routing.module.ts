import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSecondaryComponent } from './header-secondary/header-secondary.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderSecondaryComponent
  },
  {
    path: 'pages', loadChildren: () => import(`./pages/pages.module`).then(m => m.PagesModuleComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
