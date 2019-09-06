import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeaderSecondaryComponent } from './header-secondary/header-secondary.component';
import { SandwichMenuComponent } from './sandwich-menu/sandwich-menu.component';
import { HeaderSocialComponent } from './header-social/header-social.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalFeedbackComponent } from './modal-feedback/modal-feedback.component';
import { HeaderSocialMobileComponent } from './mobile-first/header-social-mobile/header-social-mobile.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { ModalMessageSubmitComponent } from './modal-message-submit/modal-message-submit.component';
import { ModalFormEmailComponent } from './modal-form-email/modal-form-email.component';
import { OnlyComputerComponent } from './mobile-first/only-computer/only-computer.component';
import { SignupComponent } from './forms/signup/signup.component';
import { LoginComponent } from './forms/login/login.component';
import { ContactService } from './services/contact-service.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSocialComponent,
    HeaderSecondaryComponent,
    SandwichMenuComponent,
    HeaderMenuComponent,
    ModalFeedbackComponent,
    ModalMessageSubmitComponent,
    HeaderSocialMobileComponent,
    ContactFormComponent,
    ModalFormEmailComponent,
    OnlyComputerComponent,
    SignupComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [ContactService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
