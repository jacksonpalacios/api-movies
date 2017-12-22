import { Component, OnInit, Input, Inject } from '@angular/core';
import { CollectionActors } from '../shared/collectionactors';

@Component({
  selector: 'app-search-actors',
  templateUrl: './search-actors.component.html',
  styleUrls: ['./search-actors.component.scss']
})
export class SearchActorsComponent implements OnInit {
  @Input() actors: CollectionActors;
  constructor(
    @Inject('BaseURL') private BaseURL,
    @Inject('ImagesURL') private ImagesURL
  ) { }

  ngOnInit() {
  }

}
