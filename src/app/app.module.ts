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

import { BaseURL, ImagesURL } from './shared/baseurl';

import { AppComponent } from './app.component';
import { Pipe } from '@angular/core/src/metadata/directives';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SearchComponent } from './search/search.component';

import { SearchService } from './services/search.service';
import { ProcessHttpmsgService } from './services/process-httpmsg.service';
import { SearchActorsComponent } from './search-actors/search-actors.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MoviesComponent } from './movies/movies.component';
import { ActorsComponent } from './actors/actors.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    SearchActorsComponent,
    SearchMoviesComponent,
    HomeComponent,
    AboutComponent,
    MoviesComponent,
    ActorsComponent 
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
    ProcessHttpmsgService,
    { provide: 'BaseURL', useValue: BaseURL },
    { provide: 'ImagesURL', useValue: ImagesURL }
  ],   
  bootstrap: [AppComponent]
})
export class AppModule { }
