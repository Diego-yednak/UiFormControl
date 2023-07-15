import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-select',
  template: `
      <mat-form-field>
          <mat-select>
              <mat-option *ngFor = "let option of cities" [value] = "option">
                  {{ option }}
              </mat-option>
          </mat-select>
      </mat-form-field>
  `,
  styles: [`:host { display: block; }`],
})
export class MySelectComponent {
    @Input() ctrl: FormControl;
    // @Input() options: string[];
    // @Input() placeholder: string;
    cities = ['Krakow', 'Warszawa', 'Gdansk'];
    countries = ['Poland', 'Germany', 'Sweden'];
}
