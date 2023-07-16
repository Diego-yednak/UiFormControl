import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ErrorMessageControl } from './error-message-control';

export class CustomValidator {
    public static required(control: AbstractControl): ValidationErrors | null {
        const value = control.value as string;
        if (value === null || value === '') {
            return ErrorMessageControl.required
        }
        return null;
    }
}
