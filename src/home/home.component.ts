import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomValidator } from '../shared/util/custom-validator';

@Component({
    selector: 'my-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {

    cities = ['Krakow', 'Warszawa', 'Gdansk'];
    countries = ['Poland', 'Germany', 'Sweden'];

    form= new FormGroup({
        name: new FormControl<string | null>(null, [CustomValidator.required]),
        age: new FormControl<number | null>(null, [CustomValidator.required, CustomValidator.requiredNumber]),
        email: new FormControl<string | null>(null, [CustomValidator.required, CustomValidator.email])
    });

}
