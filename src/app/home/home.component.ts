import { Component, OnInit } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private iconReg:SvgIconRegistryService) { }

  ngOnInit() {
    this.iconReg.loadSvg('foo.svg');
    //this.iconReg.unloadSvg('foo.svg');
  }

}
