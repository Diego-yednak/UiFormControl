import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './app/home.component';
import { MySelectComponent } from './app/my-select-custom/my-select-custom.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule
  ],
  declarations: [HomeComponent, MySelectComponent],
  bootstrap: [HomeComponent],
})
export class AppModule {}
