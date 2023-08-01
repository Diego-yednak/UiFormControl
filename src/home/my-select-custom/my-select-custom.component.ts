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

    items: Array<string> = [];
    itemsStr: string = '';

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

    touch(touch: boolean): void {
        console.log('touch: ', touch);
    }

    private watchParentControl() {
        this.parentControl.getTouchChange().subscribe(touch=> this.touch(touch));
    }

    eventSelectionChange(event: MatSelectChange) {
        const selectedValue = event.value;
        const index = this.options.indexOf(selectedValue);
        if (index != -1) {
            this.options.splice(index, 1);
            this.items.push(selectedValue);
        }
        this.itemsStr = this.items.toString();
    }

    eventRemove() {
        const item = this.items.pop();
        if (item) {
            this.options.push(item);
        }
        this.itemsStr = this.items.toString();
    }
}
