import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TIMELINE_DATA } from 'src/assets/json/user-info';
import { TimelineDetailsComponent } from './timeline-details/timeline-details.component';

@Component({
  selector: 'app-modal-wrapper',
  template: ``
})
export class ModalWrapperComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(private _route: ActivatedRoute, private _router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');
    this.displayDetails(id);
  }

  private displayDetails(id: string): void {

    const item = TIMELINE_DATA.find(t => t.id === +id);

    const openedModal = this.dialog.open(TimelineDetailsComponent, {
      height: 'auto',
      maxHeight: '90vh',
      width: '100%',
      data: item,
      disableClose: true
    });
    this.subscription = openedModal.afterClosed().subscribe(() => this._router.navigateByUrl('/huzifaanjum'));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
