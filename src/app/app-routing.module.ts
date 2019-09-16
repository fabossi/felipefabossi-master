import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderSecondaryComponent } from './header-secondary/header-secondary.component';
import { FormsGuard } from './forms/forms.guard';

const routes: Routes = [
  {
    path: '',
    component: HeaderSecondaryComponent
  },
  {
    path: 'page', loadChildren: './pages/pages.module#PagesModuleComponent'
  },
  {
    path: 'auth', loadChildren: './forms/forms.module#FormsModuleComponent'
  },
  {
    path: '**', loadChildren: './error-pages/page-not-found/page-not-found.module#PageNotFoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [FormsGuard]
})

export class AppRoutingModule { }
