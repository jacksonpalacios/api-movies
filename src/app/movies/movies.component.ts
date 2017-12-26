import { Component, OnInit, Inject } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { ListenChangeLanguage } from '../shared/baseurl';
import { CollectionMovies } from '../shared/collectionmovies';
import { Observable } from 'rxjs/Observable';
import { PageEvent } from '@angular/material';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/pluck';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  moviesPopularity: CollectionMovies;
  moviesNowPlaying: CollectionMovies;
  errMessPopularity: string;
  errMessNowPlaying: string;
  totalResults: string;
  typeTabMovie: string = 'estreno';
  length = 0;
  lengthPopularity = 0;
  lengthNowPlaying = 0;
  pageSize = 20;
  pageEvent: PageEvent;

  constructor(private moviesService: MoviesService,
    @Inject('BaseURL') private BaseURL,
    @Inject('ImagesURL') private ImagesURL) { }


  ngOnInit() {
    ListenChangeLanguage(()=> this.getPopularity());
    ListenChangeLanguage(()=> this.getNowPlaying());

    this.getPopularity();
    this.getNowPlaying();
  }

  onNextPage() {
    let inputPageIndex = document.querySelector('#inputPageIndex');
    let numPage: number = 1 + parseInt(inputPageIndex.getAttribute('value'));
    console.log(numPage);
    this.moviesService.page = "" + numPage;
    if (this.typeTabMovie == 'estreno') {
      this.getNowPlaying();
    }
    if (this.typeTabMovie == 'populares') {
      this.getPopularity();
    }
  }

  onChangeTabs(event) {
    if (event.index == 0) {
      this.typeTabMovie = 'estreno';
      this.length = this.lengthNowPlaying;
    }
    if (event.index == 1) {
      this.typeTabMovie = 'populares';
      this.length = this.lengthPopularity;
    }
  }
  
  getNowPlaying() {
    return this.moviesService.getMoviesNowPlaying()
      .subscribe(res => {
        this.moviesNowPlaying = res['results'];
        this.lengthNowPlaying = parseInt(res['total_results']);
        this.length = this.lengthNowPlaying;

      },
      errmess => this.errMessNowPlaying = <any>errmess);
  }

  getPopularity() {
    return this.moviesService.getMoviesSortByPopularity()
      .subscribe(res => {
        this.moviesPopularity = res['results'];
        this.lengthPopularity = parseInt(res['total_results']);
      },
      errmess => this.errMessPopularity = <any>errmess);
  }





}
