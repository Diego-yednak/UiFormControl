import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ErrorMessageControl } from './error-message-control';
import { UiRegexUtil } from './ui-regex-util';

export class CustomValidator {
    static required(control: AbstractControl): ValidationErrors | null {
        if (!control.value) {
            return ErrorMessageControl.required
        }
        return null;
    }
    static requiredNumber(control: AbstractControl): ValidationErrors | null {
        const value = control.value as number;
        if (value && isNaN(Number(value))) {
            return ErrorMessageControl.requiredNumber
        }
        return null;
    }
    static email(control: AbstractControl): ValidationErrors | null {
        const value = control.value as string;
        if (value && !UiRegexUtil.email(value)) {
            return ErrorMessageControl.email
        }
        return null;
    }

}
