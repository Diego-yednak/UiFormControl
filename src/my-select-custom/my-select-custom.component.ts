import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-select',
  template: `
  <mat-form-field>
    <mat-select [formControl]="ctrl" [placeholder]="placeholder">
      <mat-option *ngFor="let option of options" [value]="option">
        {{ option }}
      </mat-option>
    </mat-select>
  </mat-form-field>
  `,
  styles: [`:host { display: block; }`],
})
export class MySelectComponent {
  // @Input() ctrl: FormControl;
  // @Input() options: string[];
  // @Input() placeholder: string;
}
