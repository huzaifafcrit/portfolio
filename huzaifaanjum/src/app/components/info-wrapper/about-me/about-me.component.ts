import { Component } from '@angular/core';
import { USER_DATA } from 'src/assets/json/user-info';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  aboutUser: any;

  constructor() {
    this.aboutUser = USER_DATA.About;
  }

}
