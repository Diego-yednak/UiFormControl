import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    form: FormGroup;
    animalControl2 = new FormControl<any>(null, [Validators.required]);

    cities = ['Krakow', 'Warszawa', 'Gdansk'];
    countries = ['Poland', 'Germany', 'Sweden'];

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group({
            cities: new FormControl<any>(null, [Validators.required]),
            countries: new FormControl<any>(null, [Validators.required])
        });
    }
}
