import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HeaderSecondaryComponent } from './header-secondary/header-secondary.component';
import { SandwichMenuComponent } from './sandwich-menu/sandwich-menu.component';
import { HeaderSocialComponent } from './header-social/header-social.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { EmailServiceService } from './services/email-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalFeedbackComponent } from './modal-feedback/modal-feedback.component';
import { HeaderSocialMobileComponent } from './mobile-first/header-social-mobile/header-social-mobile.component';
import { SignupFormComponent } from './forms/signup-form/signup-form.component';
import { ModalMessageSubmitComponent } from './modal-message-submit/modal-message-submit.component';
import { ModalFormEmailComponent } from './modal-form-email/modal-form-email.component';

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
    SignupFormComponent,
    ModalFormEmailComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [EmailServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
