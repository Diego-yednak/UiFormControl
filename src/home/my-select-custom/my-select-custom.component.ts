import { Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, ValidationErrors, Validator } from '@angular/forms';
import { GenerateProviders } from '../../shared/util/generate-providers';
import { UiFormControl } from '../../shared/util/ui-form-control';

@Component({
    selector: 'my-select',
    template: `
        <mat-form-field>
            <mat-select>
                <mat-option *ngFor = "let option of options" [value] = "option">
                    {{ option }}
                </mat-option>
            </mat-select>
        </mat-form-field>
    `,
    styles: [`:host {
      display: block;
    }`],
    providers: GenerateProviders.defaultForm(MySelectComponent)
})
export class MySelectComponent implements ControlValueAccessor, Validator {
    @Input() options: string[];

    private parentControl: UiFormControl;

    registerOnValidatorChange(fn: () => void): void { }

    validate(control: AbstractControl): ValidationErrors | null {
        if (!this.parentControl && control instanceof UiFormControl) {
            this.parentControl = control;
            this.watchParentControl();
        }
        return null;
    }

    registerOnChange(fn: any): void { }

    registerOnTouched(fn: any): void { }

    writeValue(obj: any): void { }

    private watchParentControl() {
        this.parentControl.getTouchChange().subscribe((touch) => {
            console.log('touch: ', touch);
        })
    }

}
