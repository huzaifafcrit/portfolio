import { Component, Input } from '@angular/core';
import { USER_DATA } from '../../../../assets/json/user-info';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  @Input() heightValue = null;
  @Input() displayName = null;

  aboutUser: any;

  constructor() {
    this.displayName = true;
    this.aboutUser = USER_DATA.About;
   }

}
