import { Component, OnInit, Input, Inject } from '@angular/core';
import { CollectionMovies } from '../shared/collectionmovies';
import { SearchService } from '../services/search.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { ListenChangeLanguage } from '../shared/baseurl';


@Component({
  selector: 'app-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.scss']
})
export class SearchMoviesComponent implements OnInit {

  public movies: CollectionMovies;
  private errMess: string;


  constructor(
    private searchService: SearchService,
    @Inject('BaseURL') private BaseURL,
    @Inject('ImagesURL') private ImagesURL) {
    ListenChangeLanguage(() => this.search());
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
        return this.searchService.getSearchMovies(query)
          .subscribe(res => {
            this.movies = res['results'];
          },
          errmess => this.errMess = <any>errmess);
      });
  }


}
