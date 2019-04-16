import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from '../page-header/page-header.module';
import { PageSidenavModule } from './../page-sidenav/page-sidenav.module';

import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    PageHeaderModule,
    PageSidenavModule
  ]
})
export class HomePageModule {}
