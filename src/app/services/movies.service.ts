import { Injectable } from '@angular/core';
import { ApiKey, IncludeAdult } from '../shared/queryString';
import { Movie } from '../shared/movie';

import { BaseURL } from '../shared/baseurl';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { CollectionMovies } from '../shared/collectionmovies';

@Injectable()
export class MoviesService {
  public static language: string = 'es-ES';
  page: string;
  

  constructor(private http: Http,
    private processHTTPMsg: ProcessHttpmsgService) {    
    this.page = '1';
    
  }

  getMovie(id): Observable<Movie>{    
    let nextURL = 'movie/'+id;
    let params = new URLSearchParams();
    let url = BaseURL + nextURL;
    params.set('api_key', ApiKey);
    params.set('language', MoviesService.language);        
    params.set('include_adult', IncludeAdult);
    params.set('include_image_language', 'en,null');
    params.set('append_to_response', 'videos,images');

    
    return this.http.get(url, { params: params }).map(res => {
      return this.processHTTPMsg.extracData(res);
    });
  }

  getMoviesNowPlaying(): Observable<CollectionMovies>{
    let nextURL = 'movie/now_playing';
    let params = new URLSearchParams();
    let url = BaseURL + nextURL;
    params.set('api_key', ApiKey);
    params.set('language', MoviesService.language);    
    params.set('page', this.page);
    params.set('include_adult', IncludeAdult);
    params.set('include_image_language', 'es,null');
    
    return this.http.get(url, { params: params }).map(res => {
      return this.processHTTPMsg.extracData(res);
    });
  }

  getMoviesSortByPopularity(): Observable<CollectionMovies>{
    let nextURL = 'discover/movie';
    let params = new URLSearchParams();
    let url = BaseURL + nextURL;
    params.set('api_key', ApiKey);
    params.set('language', MoviesService.language);  
    params.set('sort_by', 'popularity.desc');  
    params.set('page', this.page);
    params.set('include_adult', IncludeAdult);
    params.set('include_image_language', 'es,null');
    
    return this.http.get(url, { params: params }).map(res => {
      return this.processHTTPMsg.extracData(res);
    });
  }

}
