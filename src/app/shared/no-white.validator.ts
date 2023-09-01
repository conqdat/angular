import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function NoWhiteValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const { value: controlVal } = control;
    const isWhiteSpaceOnly = (controlVal || '').trim().length === 0;
    return isWhiteSpaceOnly ? { whitespace: "value is only white space" } : null;
  };
}
