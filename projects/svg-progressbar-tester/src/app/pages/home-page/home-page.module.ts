import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatSidenavModule, MatButtonModule, MatIconModule } from '@angular/material';

import { PageHeaderModule } from './../page-header/page-header.module';
import { HomePageComponent } from './home-page.component';
import { PageSidenavComponent } from './page-sidenav/page-sidenav.component';
import { PageNavListComponent } from './page-nav-list/page-nav-list.component';

@NgModule({
  declarations: [HomePageComponent, PageSidenavComponent, PageNavListComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    CdkAccordionModule,
    PageHeaderModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class HomePageModule {}
