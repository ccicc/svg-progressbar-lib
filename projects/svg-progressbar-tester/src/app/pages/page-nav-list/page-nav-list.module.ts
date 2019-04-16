import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatButtonModule, MatIconModule } from '@angular/material';

import { NAVIGATION_PROVIDER } from './../../services/navigation-config/navigation.config';
import { PageNavListComponent } from './page-nav-list.component';

@NgModule({
  declarations: [PageNavListComponent],
  imports: [CommonModule, RouterModule, CdkAccordionModule, MatButtonModule, MatIconModule],
  exports: [PageNavListComponent],
  providers: [NAVIGATION_PROVIDER]
})
export class PageNavListModule {}
