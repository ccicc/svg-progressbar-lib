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
  MatSelectModule
} from '@angular/material';

import { SvgProgressbarComponent } from './svg-progressbar.component';
import { SvgProgressbarLibModule, SVG_PROGRESSBAR_LIB_PROVIDER } from 'svg-progressbar-lib';
import {
  CheckIsNumberValidatorDirective,
  CheckLessTotalValidatorDirective,
  CheckLessRadiusValidatorDirective
} from './directives/form-validators/form-validators.directive';

@NgModule({
  declarations: [
    SvgProgressbarComponent,
    CheckIsNumberValidatorDirective,
    CheckLessTotalValidatorDirective,
    CheckLessRadiusValidatorDirective
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SvgProgressbarLibModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSliderModule,
    MatSelectModule
  ],
  providers: [SVG_PROGRESSBAR_LIB_PROVIDER]
})
export class SvgProgressbarModule {}
