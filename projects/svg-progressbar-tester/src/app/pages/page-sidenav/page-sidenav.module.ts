import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material';

import { PageNavListModule } from './../page-nav-list/page-nav-list.module';
import { PageSidenavComponent } from './page-sidenav.component';

@NgModule({
  declarations: [PageSidenavComponent],
  imports: [CommonModule, RouterModule, MatSidenavModule, PageNavListModule],
  exports: [PageSidenavComponent]
})
export class PageSidenavModule {}
