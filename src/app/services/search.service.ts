import { Injectable } from '@angular/core';
import { ApiKey, IncludeAdult } from '../shared/queryString';
import { Actor } from '../shared/actor';
import { Movie } from '../shared/movie';
import { BaseURL } from '../shared/baseurl';

import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProcessHttpmsgService } from './process-httpmsg.service';

@Injectable()
export class SearchService {
  private language: string;
  private page: string;

  /*
   Otros atributos específicos para buscar películas
  */
  private year: number;
  private primaryReleaseYear: number;


  constructor(private http: Http,
    private processHTTPMsg: ProcessHttpmsgService) {
    this.language = 'es-ES';
    this.page = '1';
  }

  getSearchActors(query): Observable<Actor[]> {
    let nextURL = 'search/person';
    let params = new URLSearchParams();
    let url = BaseURL + nextURL;

    params.set('api_key', ApiKey);
    params.set('language', this.language);
    params.set('query', query);
    params.set('page', this.page);
    params.set('include_adult', IncludeAdult);

    return this.http.get(url, { params: params }).map(res => {
      return this.processHTTPMsg.extracData(res);
    });
  }

  getSearchMovies(query): Observable<Actor[]> {
    let nextURL = 'search/movie';
    let params = new URLSearchParams();
    let url = BaseURL + nextURL;

    params.set('api_key', ApiKey);
    params.set('language', this.language);
    params.set('query', query);
    params.set('page', this.page);
    params.set('include_adult', IncludeAdult);

    return this.http.get(url, { params: params }).map(res => {
      return this.processHTTPMsg.extracData(res);
    });
  }

}
