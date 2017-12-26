import { Component, OnInit, Input, Inject } from '@angular/core';
import { ImagesMovie } from '../shared/imagesmovie'
import { Images } from '../shared/images';
import { Profile } from '../shared/profile';
import { ListenChangeLanguage } from '../shared/baseurl';

@Component({
  selector: 'app-gallery-images',
  templateUrl: './gallery-images.component.html',
  styleUrls: ['./gallery-images.component.scss']
})
export class GalleryImagesComponent implements OnInit {
  @Input() images: any;

  backdrops: Images[];
  posters: Images[];
  profileImages: Profile;

  constructor(
    @Inject('BaseURL') private BaseURL,
    @Inject('ImagesURL') private ImagesURL
  ) {

  }

  ngOnInit() {
    ListenChangeLanguage(() => this.set());
    this.set();
  }
  set() {
    if (this.images.backdrops) {
      this.backdrops = this.images.backdrops;
      this.posters = this.images.posters
    } else {
      this.profileImages = this.images.profiles;
    }
  }

}
