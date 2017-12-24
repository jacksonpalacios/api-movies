import { Component, OnInit, Inject } from '@angular/core';
import { ActorsService } from '../services/actors.service';
import { CollectionActors } from '../shared/collectionactors';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent implements OnInit {
  actorsPopularity: CollectionActors;
  errMessPopularity: string;

  constructor(private actorsService: ActorsService,
    @Inject('BaseURL') private BaseURL,
    @Inject('ImagesURL') private ImagesURL
  ) { }

  ngOnInit() {
    this.getActorsPopularity();
  }

  getActorsPopularity() {
    return this.actorsService.getActorsSortByPopularity()
      .subscribe(res => this.actorsPopularity = res['results'],
      errmess => this.errMessPopularity = <any>errmess);
  }



}
