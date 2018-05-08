import { Component, OnInit, Inject } from '@angular/core';
import { ActorsService } from '../services/actors.service';
import { CollectionActors } from '../shared/collectionactors';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { ListenChangeLanguage } from '../shared/baseurl';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {
  actorsPopularity: CollectionActors;
  errMessPopularity: string;

  constructor(private actorsService: ActorsService,
    private _sanitizer: DomSanitizer,
    @Inject('BaseURL') private BaseURL,
    @Inject('ImagesURL') private ImagesURL
  ) { 
    
  }

  ngOnInit() {  
    ListenChangeLanguage(()=> this.getActorsPopularity());  
    this.getActorsPopularity();
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(` url(${image})`);
  }

  getActorsPopularity() {
    return this.actorsService.getActorsSortByPopularity()
      .subscribe(res => this.actorsPopularity = res['results'],
      errmess => this.errMessPopularity = <any>errmess);
  }

  



}
