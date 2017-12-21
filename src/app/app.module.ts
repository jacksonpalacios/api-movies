import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MatCheckbox,
  MatFormField,
  MatCardModule,
  MatListModule,
  MatInputModule,
  MatDialogModule,
  MatSelectModule,
  MatButtonModule,
  MatToolbarModule,
  MatCheckboxModule,
  MatGridListModule,
  MatFormFieldModule,
  MatSlideToggleModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';

import { AppComponent } from './app.component';
import { Pipe } from '@angular/core/src/metadata/directives';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent 
  ],
  imports: [
    HttpModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    BrowserModule,
    MatInputModule,
    MatDialogModule,    
    MatSelectModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatGridListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule

  ],
  providers: [],  
  bootstrap: [AppComponent]
})
export class AppModule { }
