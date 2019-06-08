import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HeaderSecondaryComponent } from "./header-secondary/header-secondary.component";
import { ButtonHeaderSecondaryComponent } from "./button-header-secondary/button-header-secondary.component";
import { ButtonSignupComponent } from "./button-signup/button-signup.component";
import { SandwichMenuComponent } from "./sandwich-menu/sandwich-menu.component";
import { MywebsitePageComponent } from './pages/mywebsite-page/mywebsite-page.component';
import { HeaderSocialComponent } from './header-social/header-social.component';
import { HeaderMenuComponent } from './header-menu/header-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSocialComponent,
    HeaderSecondaryComponent,
    ButtonHeaderSecondaryComponent,
    ButtonSignupComponent,
    SandwichMenuComponent,
    MywebsitePageComponent,
    HeaderMenuComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
