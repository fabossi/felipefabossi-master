import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsRoutingComponent } from './forms.routing';

@NgModule({
  declarations: [LoginComponent, SignupComponent],
  imports: [FormsRoutingComponent, CommonModule]
})

export class PagesModuleComponent { }
