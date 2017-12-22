import { Component, OnInit, Input, Inject } from '@angular/core';
import { CollectionActors } from '../shared/collectionactors';
import { SearchService } from '../services/search.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';


@Component({
  selector: 'app-search-actors',
  templateUrl: './search-actors.component.html',
  styleUrls: ['./search-actors.component.scss']
})


export class SearchActorsComponent implements OnInit {

  private errMess: string;
  public actors: CollectionActors;
  
  constructor(
    private searchService: SearchService,
    @Inject('BaseURL') private BaseURL,
    @Inject('ImagesURL') private ImagesURL) {

  }

  ngOnInit() {
    this.search();
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
