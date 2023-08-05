import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { CustomValidator } from '../shared/util/custom-validator';
import { UiFormBuilder } from '../shared/util/ui-form-builder';

@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [ { provide: FormBuilder, useClass: UiFormBuilder } ]
})
export class HomeComponent {

    countries = ['Brazil', 'Italy', 'France'];

    constructor(private _formBuilder: FormBuilder) { }

    form= this._formBuilder.group({
        name: new FormControl<string | null>(null, [CustomValidator.required]),
        age: new FormControl<number | null>(null, [CustomValidator.required, CustomValidator.requiredNumber]),
        email: new FormControl<string | null>(null, [CustomValidator.required, CustomValidator.email]),
        other: new FormControl<Array<string>>([], [CustomValidator.required, CustomValidator.requiredCountItem])
    });


    eventSubmit() {
        this.form.markAllAsTouched();
    }
}
