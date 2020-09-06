import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { CAROUSEL_IMAGES_DETAILS } from 'src/assets/json/user-info';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  imagesArray = CAROUSEL_IMAGES_DETAILS;

  // tslint:disable-next-line: typedef
  get images(){
    return of(this.imagesArray);
  }

  // tslint:disable-next-line: typedef
  get leftimg() {
    return this.imagesArray.find(i => i.id === 5);
  }

  // tslint:disable-next-line: typedef
  get rightimg() {
    return this.imagesArray.find(i => i.id === 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
