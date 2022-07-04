import { AbstractControl, FormGroup } from "@angular/forms";
export function PasswordValidators(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[controlName];
      let matchingControl = formGroup.controls[matchingControlName]
      if ( control.errors && matchingControl.errors ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ PasswordValidators: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
