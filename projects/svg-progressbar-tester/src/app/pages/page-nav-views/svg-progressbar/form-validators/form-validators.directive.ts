import { Directive } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  ValidatorFn,
  NG_VALIDATORS,
  Validator,
  ValidationErrors
} from '@angular/forms';

/* 检验表单字段是否为数值 */
export function checkIsNumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    const value = control.value;
    if (!value) {
      return { checkIsNumber: { value } };
    }
    return !Number.isNaN(+value) && Number.isFinite(+value) ? null : { checkIsNumber: { value } };
  };
}

/* currValue必须小于total */
export function checkLessTotalValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    const currVal = control.get('currVal') as FormControl;
    const total = control.get('total') as FormControl;
    return currVal && total && currVal.value && total.value && +currVal.value < +total.value
      ? null
      : { checkLessTotal: true };
  };
}

/* radius必须大于或等于strokeWidth */
export function checkLessRadiusValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    const strokeWidth = control.get('strokeWidth') as FormControl;
    const radius = control.get('radius') as FormControl;
    return radius &&
      strokeWidth &&
      radius.value &&
      strokeWidth.value &&
      radius.value >= strokeWidth.value
      ? null
      : { checkLessRadius: true };
  };
}

@Directive({
  selector: '[appCheckIsNumber]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckIsNumberValidatorDirective,
      multi: true
    }
  ]
})
export class CheckIsNumberValidatorDirective implements Validator {
  public validate(control: AbstractControl): ValidationErrors {
    return checkIsNumberValidator()(control);
  }
}

@Directive({
  selector: '[appCheckLessTotal]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckLessTotalValidatorDirective,
      multi: true
    }
  ]
})
export class CheckLessTotalValidatorDirective implements Validator {
  public validate(control: AbstractControl): ValidationErrors {
    return checkLessTotalValidator()(control);
  }
}

@Directive({
  selector: '[appCheckLessRadius]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CheckLessRadiusValidatorDirective,
      multi: true
    }
  ]
})
export class CheckLessRadiusValidatorDirective implements Validator {
  public validate(control: AbstractControl): ValidationErrors {
    return checkLessRadiusValidator()(control);
  }
}
