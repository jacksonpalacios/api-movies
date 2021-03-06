import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import { AngularSvgIconModule } from 'angular-svg-icon';
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
  MatRadioModule,
  MatMenuModule,
  MatTooltipModule,
  MatTabsModule,
  MatPaginatorModule
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
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesService } from './services/movies.service';
import { GalleryImagesComponent } from './gallery-images/gallery-images.component';
import { TrailerComponent } from './trailer/trailer.component';
import { ActorsService } from './services/actors.service';
import { ActorDetailComponent } from './actor-detail/actor-detail.component';


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
    ActorsComponent,
    MovieDetailComponent,
    GalleryImagesComponent,
    TrailerComponent,
    ActorDetailComponent 
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
    MatRadioModule,
    MatMenuModule,
    MatTooltipModule,
    YoutubePlayerModule,
    AngularSvgIconModule,
    HttpClientModule,
    MatTabsModule,
    MatPaginatorModule

  ],
  providers: [
    SearchService,
    MoviesService,
    ProcessHttpmsgService,
    ActorsService,
    { provide: 'BaseURL', useValue: BaseURL },
    { provide: 'ImagesURL', useValue: ImagesURL }
  ],   
  entryComponents: [HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
