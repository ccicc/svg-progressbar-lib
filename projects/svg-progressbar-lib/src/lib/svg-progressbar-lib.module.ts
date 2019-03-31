import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgProgressbarLibComponent } from './svg-progressbar-lib.component';
import { SvgProgressbarLibService } from './svg-progressbar-lib.service';

@NgModule({
  declarations: [SvgProgressbarLibComponent],
  imports: [CommonModule],
  providers: [SvgProgressbarLibService],
  exports: [SvgProgressbarLibComponent]
})
export class SvgProgressbarLibModule {}
