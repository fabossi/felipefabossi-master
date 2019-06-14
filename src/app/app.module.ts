import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HeaderSecondaryComponent } from './header-secondary/header-secondary.component';
import { ButtonHeaderSecondaryComponent } from './button-header-secondary/button-header-secondary.component';
import { ButtonSignupComponent } from './button-signup/button-signup.component';
import { SandwichMenuComponent } from './sandwich-menu/sandwich-menu.component';
import { HeaderSocialComponent } from './header-social/header-social.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { VideoBoxComponent } from './header-secondary/video-box/video-box.component';
import { PageNotFoundComponent } from './error-pages/page-not-found/page-not-found.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { EmailServiceService } from './services/email-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ModalFeedbackComponent } from './modal-feedback/modal-feedback.component';
import { SafePipe } from './pipes/safe.pipe';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HeaderSocialMobileComponent } from './mobile-first/header-social-mobile/header-social-mobile.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderSocialComponent,
    HeaderSecondaryComponent,
    ButtonHeaderSecondaryComponent,
    ButtonSignupComponent,
    SandwichMenuComponent,
    HeaderMenuComponent,
    VideoBoxComponent,
    PageNotFoundComponent,
    ChatbotComponent,
    ModalFeedbackComponent,
    SafePipe,
    HeaderSocialMobileComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule
  ],
  providers: [EmailServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
