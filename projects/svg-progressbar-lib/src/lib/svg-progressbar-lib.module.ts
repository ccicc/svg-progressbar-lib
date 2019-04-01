import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgProgressbarLibComponent } from './svg-progressbar-lib.component';
import { SvgProgressbarLibService } from './svg-progressbar-lib.service';
import { SVG_PROGRESSBAR_LIB_PROVIDER } from './svg-progressbar-lib.config';

@NgModule({
  declarations: [SvgProgressbarLibComponent],
  imports: [CommonModule],
  providers: [SvgProgressbarLibService, SVG_PROGRESSBAR_LIB_PROVIDER],
  exports: [SvgProgressbarLibComponent]
})
export class SvgProgressbarLibModule {}
