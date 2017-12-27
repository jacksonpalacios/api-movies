import { Component, OnInit, Inject } from '@angular/core';
import { ActorsService } from '../services/actors.service';
import { Actor } from '../shared/actor';
import { Images } from '../shared/images';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';
import { Biography } from '../shared/biography';
import { ListenChangeLanguage } from '../shared/baseurl';

@Component({
  selector: 'app-actor-detail',
  templateUrl: './actor-detail.component.html',
  styleUrls: ['./actor-detail.component.scss']
})
export class ActorDetailComponent implements OnInit {
  actorBiography: Biography;
  errMess: string;

  constructor(private actorServices: ActorsService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') private BaseURL,
    @Inject('ImagesURL') private ImagesURL) {
      ListenChangeLanguage(() => this.getActorBiography());
     }

  ngOnInit() {    
    this.getActorBiography();    
  }

  getActorBiography(){
    return this.route.params
      .switchMap((params: Params) => this.actorServices.getActorBiography(+params['id']))
      .subscribe(res => {
        this.actorBiography = res;        
      },
      errmess => this.errMess = <any>errmess);
  }

}
