import { Component } from '@angular/core';
import { TimelineDetailsComponent } from '../templates/timeline-details/timeline-details.component';
import {MatDialog} from '@angular/material/dialog';
import { TIMELINE_DATA } from 'src/assets/json/user-info';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent {
  timelineData = TIMELINE_DATA;
  constructor(public dialog: MatDialog) {}

  displayDetails(item): void {
    this.dialog.open(TimelineDetailsComponent, {
      height: 'auto',
      maxHeight: '90vh',
      width: '100%',
      data: item
    });
  }

}
