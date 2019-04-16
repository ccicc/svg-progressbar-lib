import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SVG_PROGRESSBAR_LIB_CONFIG, SvgProgressbarLibConfig } from 'svg-progressbar-lib';

@Component({
  selector: 'app-svg-progressbar',
  templateUrl: './svg-progressbar.component.html',
  styleUrls: ['./svg-progressbar.component.scss']
})
export class SvgProgressbarComponent implements OnInit {
  public formConfig: FormGroup = this.formBuilder.group({
    radius: [this.defaults.radius],
    strokeWidth: [this.defaults.strokeWidth],
    currVal: [this.defaults.currVal, [Validators.required]],
    total: [this.defaults.total, [Validators.required]],
    duration: [this.defaults.duration, [Validators.required]],
    delay: [this.defaults.delay],
    semicycle: [this.defaults.semicycle],
    rounded: [this.defaults.rounded],
    clockwise: [this.defaults.clockwise],
    color: [this.defaults.color],
    background: [this.defaults.background],
    animation: [this.defaults.animation]
  });

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
    return this.formConfig.get('aniamtion') as FormControl;
  }

  public constructor(
    private formBuilder: FormBuilder,
    @Inject(SVG_PROGRESSBAR_LIB_CONFIG) private defaults: SvgProgressbarLibConfig
  ) {}

  public ngOnInit() {}
}
