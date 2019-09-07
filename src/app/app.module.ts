import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { HeaderSecondaryComponent } from './header-secondary/header-secondary.component';
import { SandwichMenuComponent } from './sandwich-menu/sandwich-menu.component';
import { HeaderSocialComponent } from './header-social/header-social.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { ModalFeedbackComponent } from './modal-feedback/modal-feedback.component';
import { HeaderSocialMobileComponent } from './mobile-first/header-social-mobile/header-social-mobile.component';
import { ModalMessageSubmitComponent } from './modal-message-submit/modal-message-submit.component';
import { OnlyComputerComponent } from './mobile-first/only-computer/only-computer.component';
import { ContactService } from './services/contact-service.service';
import { AuthService } from './services/auth.service';


library.add(faEye, faEyeSlash);
dom.watch();

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
    OnlyComputerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, FontAwesomeModule],
  providers: [ContactService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
