import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../shared/movie';


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movie: Movie;
  errMess: string;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {

    return this.moviesService.getMovie('550')
      .subscribe(res => {
        this.movie = res['results'];
        console.log(this.movie);
      },
      errmess => this.errMess = <any>errmess);
  }


}
