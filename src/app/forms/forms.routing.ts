import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalFormsComponent } from '../modal-forms/modal-forms.component';
import { ModalMessageSubmitComponent } from '../modal-message-submit/modal-message-submit.component';

const routes: Routes = [
  {
    path: 'login',
    component: ModalFormsComponent
  },
  {
    path: 'signup',
    component: ModalFormsComponent
  },
  {
    path: 'email',
    component: ModalFormsComponent
  },
  {
    path: 'feedback',
    component: ModalMessageSubmitComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})

export class FormsRoutingComponent { }
