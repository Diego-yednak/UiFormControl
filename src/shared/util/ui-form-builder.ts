import {
    AbstractControl, AsyncValidatorFn, FormBuilder, FormControl,
    FormControlOptions, FormControlState, FormGroup, ValidatorFn
} from '@angular/forms';
import { UiFormControl } from './ui-form-control';
import { Injectable } from '@angular/core';

@Injectable()
export class UiFormBuilder extends FormBuilder {

    override group(controls: { [key: string]: any; }, options: { [key: string]: any; }): FormGroup {
        this.transformToUiControls(Object.values(controls));
        return new FormGroup(controls, options);
    }

    override control<T>(formState: T | FormControlState<T>, validatorOrOpts?: ValidatorFn | ValidatorFn[] | FormControlOptions | null, asyncValidator?: AsyncValidatorFn | AsyncValidatorFn[] | null): FormControl<T | null> {
        return new UiFormControl(formState, validatorOrOpts, asyncValidator);
    }

    private transformToUiControls(controls: any[]) {
        for (let control of controls) {
            if (control instanceof FormControl) {
                UiFormBuilder.transformToUiControl(control);
            }
        }
    }

    static transformToUiControl(control: AbstractControl): UiFormControl {
        Object.setPrototypeOf(control, UiFormControl.prototype);
        (control as UiFormControl).resetTouchChange();
        return control as UiFormControl;
    }
}
