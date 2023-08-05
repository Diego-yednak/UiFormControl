import { AbstractControl } from '@angular/forms';
import { ErrorMessageControl } from './error-message-control';
import { UiRegexUtil } from './ui-regex-util';
import { ErrorMessageModel } from '../model/error-message.model';

export class CustomValidator {
    static required(control: AbstractControl): ErrorMessageModel | null {
        if (!control.value) {
            return ErrorMessageControl.required
        }
        return null;
    }
    static requiredNumber(control: AbstractControl): ErrorMessageModel | null {
        const value = control.value as number;
        if (value && isNaN(Number(value))) {
            return ErrorMessageControl.requiredNumber
        }
        return null;
    }
    static email(control: AbstractControl): ErrorMessageModel | null {
        const value = control.value as string;
        if (value && !UiRegexUtil.email(value)) {
            return ErrorMessageControl.email
        }
        return null;
    }
    static requiredCountItem(control: AbstractControl): ErrorMessageModel | null {
        const value = control.value as Array<string>;
        if (value && value.length !== 2) {
            return ErrorMessageControl.requiredCountItem(2 - value.length)
        }
        return null;
    }

}
