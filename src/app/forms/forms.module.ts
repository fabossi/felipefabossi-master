import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { library, dom } from '@fortawesome/fontawesome-svg-core';


import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsRoutingComponent } from './forms.routing';
import { ModalFormsComponent } from '../modal-forms/modal-forms.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

// dom.watch();

@NgModule({
  declarations: [LoginComponent, SignupComponent, ModalFormsComponent, ContactFormComponent],
  imports: [FormsRoutingComponent, CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule, FontAwesomeModule]
})

export class FormsModuleComponent { }
