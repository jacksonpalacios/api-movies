import { Component, OnInit, Inject } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../shared/movie';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { YoutubePlayerModule } from 'ng2-youtube-player'
import { Videos } from '../shared/videos';

import 'rxjs/add/operator/switchMap';
import { ListenChangeLanguage } from '../shared/baseurl';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  errMess: string;
  trailers: Videos[];
  player: YT.Player;
  private id: string = '';

  constructor(private moviesService: MoviesService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') private BaseURL,
    @Inject('ImagesURL') private ImagesURL) {
    ListenChangeLanguage(() => this.getMovie());
  }

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    console.log("getmovies detail-movies");
    return this.route.params
      .switchMap((params: Params) => this.moviesService.getMovie(+params['id']))
      .subscribe(res => {
        this.movie = res;
        this.trailers = res['videos']['results'];
      },
      errmess => this.errMess = <any>errmess);
  }

  savePlayer(player) {
    this.player = player;
  }
  onChangeTabs(event) {

  }

  onStateChange(event) {

  }
}
