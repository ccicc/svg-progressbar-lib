import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material';

import { PageNavListModule } from './../page-nav-list/page-nav-list.module';
import { PageSidenavComponent } from './page-sidenav.component';
import { PageTitleService } from './../../services/page-title/page-title.service';

@NgModule({
  declarations: [PageSidenavComponent],
  imports: [CommonModule, RouterModule, MatSidenavModule, PageNavListModule],
  exports: [PageSidenavComponent],
  providers: [PageTitleService]
})
export class PageSidenavModule {}
