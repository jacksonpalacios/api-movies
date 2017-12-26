import { Component, OnInit, Input, Inject } from '@angular/core';
import { CollectionActors } from '../shared/collectionactors';
import { SearchService } from '../services/search.service';
import { Observable } from 'rxjs/Observable';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ListenChangeLanguage } from '../shared/baseurl';


@Component({
  selector: 'app-search-actors',
  templateUrl: './search-actors.component.html',
  styleUrls: ['./search-actors.component.scss']
})


export class SearchActorsComponent implements OnInit {

  errMess: string;
  actors: CollectionActors;
  
  constructor(
    private searchService: SearchService,
    private _sanitizer: DomSanitizer,
    @Inject('BaseURL') private BaseURL,
    @Inject('ImagesURL') private ImagesURL) {

  }

  ngOnInit() {
    
    ListenChangeLanguage(() => this.search());
    this.search();
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(` url(${image})`);
  }

  search() {
    let searchField = document.querySelector('#query');    
    Observable.fromEvent(searchField, 'input')
      .pluck('target', 'value')
      .filter((searchText: string) => { return searchText.length > 2 })
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(query => {
        return this.searchService.getSearchActors(query)
          .subscribe(res => {
            this.actors = res['results'];
          },
          errmess => this.errMess = <any>errmess);
      });
  }



}
