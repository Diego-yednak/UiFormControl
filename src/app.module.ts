import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule, MatFormFieldModule } from '@angular/material';
import { AppComponent } from './app.component';
import { MySelectComponent } from './my-select-custom/my-select-custom.component';

@NgModule({
  imports: [ BrowserModule, BrowserAnimationsModule ,ReactiveFormsModule, MatFormFieldModule, MatSelectModule ],
  declarations: [ AppComponent, MySelectComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
