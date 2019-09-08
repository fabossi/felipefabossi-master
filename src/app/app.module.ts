import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { HeaderSecondaryComponent } from './header-secondary/header-secondary.component';
import { HeaderSocialComponent } from './header-social/header-social.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeaderSocialMobileComponent } from './mobile-first/header-social-mobile/header-social-mobile.component';
import { OnlyComputerComponent } from './mobile-first/only-computer/only-computer.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSocialComponent,
    HeaderSecondaryComponent,
    HeaderMenuComponent,
    HeaderSocialMobileComponent,
    OnlyComputerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
