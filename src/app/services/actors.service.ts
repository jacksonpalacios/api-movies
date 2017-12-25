import { Injectable } from '@angular/core';
import { ApiKey, IncludeAdult } from '../shared/queryString';
import { Actor } from '../shared/actor';

import { BaseURL } from '../shared/baseurl';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Biography } from '../shared/biography';

@Injectable()
export class ActorsService {
  private language: string;
  private page: string;

  constructor(private http: Http,
    private processHTTPMsg: ProcessHttpmsgService) {
    this.language = 'es-ES';
    this.page = '1';
  }

  getActorsSortByPopularity(): Observable<Actor[]>{
    let nextURL = 'person/popular';
    let params = new URLSearchParams();
    let url = BaseURL + nextURL;
    params.set('api_key', ApiKey);
    params.set('language', this.language);      
    params.set('page', this.page);
        
    return this.http.get(url, { params: params }).map(res => {
      return this.processHTTPMsg.extracData(res);
    });
  }

  getActorBiography(id): Observable<Biography>{
    let nextURL = 'person/'+id;
    let params = new URLSearchParams();
    let url = BaseURL + nextURL;
    params.set('api_key', ApiKey);
    params.set('language', this.language);      
    params.set('append_to_response', 'images');
    return this.http.get(url, { params: params }).map(res => {
      return this.processHTTPMsg.extracData(res);
    });
  }

}
