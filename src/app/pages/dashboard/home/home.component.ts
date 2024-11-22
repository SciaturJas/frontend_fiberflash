import { Component, OnInit, ViewChild } from '@angular/core';
import * as lightbox from 'ngx-lightbox';
import { Lightbox } from 'ngx-lightbox';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public _album: Array<any> = [{ src: 'assets/img/bg-8.jpg', caption: 'Your caption', thumb: 'assets/img/bg-8.jpg' },
  { src: 'assets/img/business-4.jpg', caption: 'Your caption', thumb: 'assets/img/business-4.jpg' },
  { src: 'assets/img/bg-2.jpg', caption: 'Your caption', thumb: 'assets/img/bg-2.jpg' }];
  constructor(private _lightbox: Lightbox) { }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }


  ngOnInit(): void {
  }

}
