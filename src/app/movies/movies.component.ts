import { Component, OnInit, Inject } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { CollectionMovies } from '../shared/collectionmovies';


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

  constructor(private moviesService: MoviesService,
    @Inject('BaseURL') private BaseURL,
    @Inject('ImagesURL') private ImagesURL) { }

  ngOnInit() {

    this.getNowPlaying();
    this.getPopularity();
    
  }

  getNowPlaying(){
    return this.moviesService.getMoviesNowPlaying()
      .subscribe(res => {
        this.moviesNowPlaying = res['results'];        
      },
      errmess => this.errMessNowPlaying = <any>errmess);
  }

  getPopularity(){
    return this.moviesService.getMoviesSortByPopularity()
      .subscribe(res => {
        this.moviesPopularity = res['results'];        
      },
      errmess => this.errMessPopularity = <any>errmess);
  }


}
