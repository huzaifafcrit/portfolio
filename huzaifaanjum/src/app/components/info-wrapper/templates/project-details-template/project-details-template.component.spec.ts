import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsTemplateComponent } from './project-details-template.component';

describe('ProjectDetailsTemplateComponent', () => {
  let component: ProjectDetailsTemplateComponent;
  let fixture: ComponentFixture<ProjectDetailsTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectDetailsTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectDetailsTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
