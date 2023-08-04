import { Component, Input } from '@angular/core';
import { AbstractControl, ControlValueAccessor, ValidationErrors, Validator } from '@angular/forms';
import { GenerateProviders } from '../../shared/util/generate-providers';
import { UiFormControl } from '../../shared/util/ui-form-control';
import { MatSelectChange } from '@angular/material/select';

@Component({
    selector: 'my-select',
    templateUrl: 'my-custom-select.component.html',
    styleUrls: ['my-custom-select.component.css'],
    providers: GenerateProviders.defaultForm(MySelectComponent)
})
export class MySelectComponent implements ControlValueAccessor, Validator {
    @Input() options: string[];
    value: Array<string>;
    public parentControl: UiFormControl;
    private _onTouched: () => void;
    private _onChange: (value: any) => void;

    eventSelectionChange(event: MatSelectChange) {
        const selectedValue = event.value;
        event.source.writeValue(null);
        this.value.push(selectedValue);
        this._onChange(this.value);
        this._onTouched();
    }

    eventRemove() {
        this.value.pop();
        this._onChange(this.value);
    }

    getOptions(): Array<string> {
        return this.options.filter((op) => !this.value.includes(op))
    }

    registerOnValidatorChange(fn: () => void): void { }

    validate(control: AbstractControl): ValidationErrors | null {
        if (!this.parentControl && control instanceof UiFormControl) {
            this.parentControl = control;
            this.watchParentControl();
        }
        return null;
    }

    registerOnChange(fn: any): void {
        this._onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }

    writeValue(value: Array<string>): void {
        this.value = value;
    }

    touch(touch: boolean): void {
        console.log('touch: ', touch);
    }

    private watchParentControl() {
        this.parentControl.getTouchChange().subscribe(
            touch => this.touch(touch)
        );
    }

}
