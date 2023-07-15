import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    form: FormGroup;

    cities = ['Krakow', 'Warszawa', 'Gdansk'];
    countries = ['Poland', 'Germany', 'Sweden'];

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            cities: ['', Validators.required],
            countries: ['', Validators.required],
        })
    }
}
