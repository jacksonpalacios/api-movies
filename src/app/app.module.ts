import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  MatCheckbox,
  MatFormField,
  MatIconModule,
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
  MatProgressSpinnerModule,
  MatRadioModule
} from '@angular/material';
import 'hammerjs';

import { baseURL, imagesURL } from './shared/baseurl';

import { AppComponent } from './app.component';
import { Pipe } from '@angular/core/src/metadata/directives';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SearchComponent } from './search/search.component';
import { SearchService } from './services/search.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent 
  ],
  imports: [
    HttpModule,
    FormsModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    BrowserModule,
    MatInputModule,
    MatDialogModule,    
    MatSelectModule,
    MatButtonModule,
    AppRoutingModule,   
    MatToolbarModule,
    MatGridListModule,
    MatCheckboxModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatRadioModule

  ],
  providers: [
    SearchService,
    { provide: 'BaseURL', useValue: baseURL },
    { provide: 'ImagesURL', useValue: imagesURL }
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }
