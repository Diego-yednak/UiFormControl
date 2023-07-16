import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { MySelectComponent } from './home/my-select-custom/my-select-custom.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatErrorContentDirective } from './shared/directive/mat-error-content.directive';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule
    ],
    declarations: [HomeComponent, MySelectComponent, MatErrorContentDirective],
    bootstrap: [HomeComponent],
})
export class AppModule { }
