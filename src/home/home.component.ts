import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
        yourName: new FormControl<string>('', [CustomValidator.required]),
        lastName: new FormControl<string>('', [Validators.required]),
        countries: new FormControl<any>(null, [Validators.required])
    });

}
