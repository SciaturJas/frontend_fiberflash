import { Component, OnInit } from '@angular/core';
import * as lightbox from 'ngx-lightbox';
import { Lightbox } from 'ngx-lightbox';
import { PersonalizationService } from 'src/app/shared/services/personalization.service';

@Component({
  selector: 'app-social-profile',
  templateUrl: './social-profile.component.html',
  styleUrls: ['./social-profile.component.scss']
})
export class SocialProfileComponent implements OnInit {
  public _album: Array<any> = [
    { src: 'assets/img/bg-8.jpg', caption: 'Your caption', thumb: 'assets/img/bg-8.jpg' },
    { src: 'assets/img/bg-3.jpg', caption: 'Your caption', thumb: 'assets/img/bg-3.jpg' },
    { src: 'assets/img/bg-4.jpg', caption: 'Your caption', thumb: 'assets/img/bg-4.jpg' },
    { src: 'assets/img/bg-5.jpg', caption: 'Your caption', thumb: 'assets/img/bg-5.jpg' },
    { src: 'assets/img/bg-6.jpg', caption: 'Your caption', thumb: 'assets/img/bg-6.jpg' },
    { src: 'assets/img/bg-7.jpg', caption: 'Your caption', thumb: 'assets/img/bg-7.jpg' },
    { src: 'assets/img/bg-10.jpg', caption: 'Your caption', thumb: 'assets/img/bg-10.jpg' },
    { src: 'assets/img/bg-9.jpg', caption: 'Your caption', thumb: 'assets/img/bg-9.jpg' },
    { src: 'assets/img/bg-11.jpg', caption: 'Your caption', thumb: 'assets/img/bg-11.jpg' },
    { src: 'assets/img/bg-12.jpg', caption: 'Your caption', thumb: 'assets/img/bg-12.jpg' },
    { src: 'assets/img/bg-14.jpg', caption: 'Your caption', thumb: 'assets/img/bg-14.jpg' },
    { src: 'assets/img/bg-15.jpg', caption: 'Your caption', thumb: 'assets/img/bg-15.jpg' }
  ];

  constructor(
    private _lightbox: Lightbox,
    public personalizationService: PersonalizationService) { }

  ngOnInit(): void {
    this.personalizationService.renderUserImage();
  }
  openlightbox(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

}
