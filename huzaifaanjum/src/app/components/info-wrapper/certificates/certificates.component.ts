import { Component } from '@angular/core';
import { of } from 'rxjs';
import { CAROUSEL_IMAGES_DETAILS } from 'src/assets/json/user-info';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { MatDialog } from '@angular/material/dialog';
import { CertificateTemplateComponent } from '../templates/certificate-template/certificate-template.component';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {

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
    return this.imagesArray.find(i => i.id === 5);
  }

  constructor(config: NgbCarouselConfig, public dialog: MatDialog) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.keyboard = false;
    config.pauseOnHover = true;
    config.showNavigationArrows = false;
  }

  openImage(imgSrc): void {
    this.dialog.open(CertificateTemplateComponent, {
      width: '100%',
      height: '90%',
      data: {imgSrc}
    });
  }
}
