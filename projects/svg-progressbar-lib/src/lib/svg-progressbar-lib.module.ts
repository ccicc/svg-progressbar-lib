import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SvgProgressbarLibComponent } from './svg-progressbar-lib.component';
import { SvgProgressbarLibService } from './svg-progressbar-lib.service';
import { SVG_PROGRESSBAR_LIB_PROVIDER } from './svg-progressbar-lib.config';
import { SvgProgressbarLibEase } from './svg-progressbar-lib.ease';
import { CodeHighlightDirective } from './code-highlight/code-highlight.directive';

@NgModule({
  declarations: [SvgProgressbarLibComponent, CodeHighlightDirective],
  imports: [CommonModule],
  providers: [SvgProgressbarLibService, SVG_PROGRESSBAR_LIB_PROVIDER, SvgProgressbarLibEase],
  exports: [SvgProgressbarLibComponent]
})
export class SvgProgressbarLibModule {}
