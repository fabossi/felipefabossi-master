import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { HeaderSecondaryComponent } from "./header-secondary/header-secondary.component";
import { ButtonHeaderSecondaryComponent } from "./button-header-secondary/button-header-secondary.component";
import { ButtonSignupComponent } from "./button-signup/button-signup.component";
import { SandwichMenuComponent } from "./sandwich-menu/sandwich-menu.component";
import { MywebsitePageComponent } from './pages/mywebsite-page/mywebsite-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSecondaryComponent,
    ButtonHeaderSecondaryComponent,
    ButtonSignupComponent,
    SandwichMenuComponent,
    MywebsitePageComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
