import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoWrapperComponent } from './info-wrapper.component';

describe('InfoWrapperComponent', () => {
  let component: InfoWrapperComponent;
  let fixture: ComponentFixture<InfoWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
