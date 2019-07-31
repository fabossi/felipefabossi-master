import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found.component';
import { PagesNotFoundRoutingComponent } from './page-not-found.routing';

@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [PagesNotFoundRoutingComponent, CommonModule]
})

export class PageNotFoundModule { }
