import { Component } from '@angular/core';
import { USER_DATA } from 'src/assets/json/user-info';

@Component({
  selector: 'app-areas-of-interest',
  templateUrl: './areas-of-interest.component.html',
  styleUrls: ['./areas-of-interest.component.css']
})
export class AreasOfInterestComponent {
  userInterests = USER_DATA.interests;
}
