import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { SearchService } from '../services/search.service';
import { ActorsService } from '../services/actors.service';
import { Output } from '@angular/core/src/metadata/directives';
import { EventEmitter } from 'selenium-webdriver';
import { HomeComponent } from '../home/home.component';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  languages = [
    {
      name_languge: 'es-ES',
      url_icon: 'assets/images/spain.svg',
      name_image: 'es,null'
    },
    {
      name_languge: 'en-US',
      url_icon: 'assets/images/united-states.svg',
      name_image: 'en,null'
    }]

  indexLanguageSelected: number = 0;


  constructor() { }

  ngOnInit() {
  }
  selectLanguage(event) {
    
    MoviesService.language = this.languages[event.value].name_languge;
    SearchService.language = this.languages[event.value].name_languge;
    ActorsService.language = this.languages[event.value].name_languge;
  }
  

}
