import { Component, OnInit, Inject, Input } from '@angular/core';
import {} from 'ng2-youtube-player'
import { Videos } from '../shared/videos';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit {
  @Input() videosmovie: Videos[];
  trailers: Videos[];
  player: YT.Player;
  private id: string = 'qDuKsiwS5xw';

  constructor() { }

  ngOnInit() {
    this.trailers = this.videosmovie;
  }

  savePlayer(player) {
    this.player = player;
    
  }
  onStateChange(event) {
    
  }

}
