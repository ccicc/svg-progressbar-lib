import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatCardModule,
  MatSliderModule,
  MatSelectModule,
  MatOptionModule
} from '@angular/material';

import { SvgProgressbarLibModule, SVG_PROGRESSBAR_LIB_PROVIDER } from 'svg-progressbar-lib';
import { SvgProgressbarComponent } from './svg-progressbar.component';

@NgModule({
  declarations: [SvgProgressbarComponent],
  imports: [
    CommonModule,
    SvgProgressbarLibModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSliderModule,
    MatSelectModule,
    MatOptionModule,
    ReactiveFormsModule
  ],
  providers: [SVG_PROGRESSBAR_LIB_PROVIDER]
})
export class SvgProgressbarModule {}
