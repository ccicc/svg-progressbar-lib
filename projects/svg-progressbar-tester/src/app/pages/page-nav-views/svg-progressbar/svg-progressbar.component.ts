import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { SVG_PROGRESSBAR_LIB_CONFIG, SvgProgressbarLibConfig } from 'svg-progressbar-lib';
import {
  checkIsNumberValidator,
  checkLessTotalValidator,
  checkLessRadiusValidator
} from './directives/form-validators/form-validators.directive';

@Component({
  selector: 'app-svg-progressbar',
  templateUrl: './svg-progressbar.component.html',
  styleUrls: ['./svg-progressbar.component.scss']
})
export class SvgProgressbarComponent implements OnInit {
  public formConfig: FormGroup = this.formBuilder.group(
    {
      radius: [
        this.defaults.radius,
        [Validators.required, checkIsNumberValidator(), Validators.min(10), Validators.max(400)]
      ],
      strokeWidth: [
        this.defaults.strokeWidth,
        [Validators.required, checkIsNumberValidator(), Validators.min(1), Validators.max(100)]
      ],
      currVal: [this.defaults.currVal, [Validators.required, checkIsNumberValidator()]],
      total: [this.defaults.total, [Validators.required, checkIsNumberValidator()]],
      duration: [this.defaults.duration, [Validators.required, checkIsNumberValidator()]],
      delay: [this.defaults.delay, checkIsNumberValidator()],
      semicycle: [this.defaults.semicycle],
      rounded: [this.defaults.rounded],
      clockwise: [this.defaults.clockwise],
      color: [this.defaults.color],
      background: [this.defaults.background],
      animation: [this.defaults.animation]
    },
    {
      validators: [checkLessTotalValidator(), checkLessRadiusValidator()]
    }
  );

  public get radius(): FormControl {
    return this.formConfig.get('radius') as FormControl;
  }

  public get currVal(): FormControl {
    return this.formConfig.get('currVal') as FormControl;
  }

  public get total(): FormControl {
    return this.formConfig.get('total') as FormControl;
  }

  public get strokeWidth(): FormControl {
    return this.formConfig.get('strokeWidth') as FormControl;
  }

  public get duration(): FormControl {
    return this.formConfig.get('duration') as FormControl;
  }

  public get delay(): FormControl {
    return this.formConfig.get('delay') as FormControl;
  }

  public get semicycle(): FormControl {
    return this.formConfig.get('semicycle') as FormControl;
  }

  public get rounded(): FormControl {
    return this.formConfig.get('rounded') as FormControl;
  }

  public get clockwise(): FormControl {
    return this.formConfig.get('clockwise') as FormControl;
  }

  public get animation(): FormControl {
    return this.formConfig.get('animation') as FormControl;
  }

  public constructor(
    private formBuilder: FormBuilder,
    @Inject(SVG_PROGRESSBAR_LIB_CONFIG) private defaults: SvgProgressbarLibConfig
  ) {}

  public ngOnInit() {}
}
