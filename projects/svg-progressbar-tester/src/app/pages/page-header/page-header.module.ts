import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderComponent } from './page-header.component';
import { PageTitleService } from './../../services/page-title/page-title.service';

@NgModule({
  declarations: [PageHeaderComponent],
  imports: [CommonModule],
  exports: [PageHeaderComponent],
  providers: [PageTitleService]
})
export class PageHeaderModule {}
