import { Component, OnInit, Input, Inject } from '@angular/core';
import { ImagesMovie } from '../shared/imagesmovie'
import { Images } from '../shared/images';

@Component({
  selector: 'app-gallery-images',
  templateUrl: './gallery-images.component.html',
  styleUrls: ['./gallery-images.component.scss']
})
export class GalleryImagesComponent implements OnInit {
  @Input() imagesmovie: ImagesMovie;

  backdrops: Images[];
  posters: Images[];

  constructor(
    @Inject('BaseURL') private BaseURL,
    @Inject('ImagesURL') private ImagesURL
  ) {
    
   }

  ngOnInit() {
    this.backdrops = this.imagesmovie.backdrops;
    this.posters = this.imagesmovie.posters
  }

}
