import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { PROJECTS } from 'src/assets/json/user-info';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-project-details-template',
  templateUrl: './project-details-template.component.html',
  styleUrls: ['./project-details-template.component.css']
})
export class ProjectDetailsTemplateComponent implements OnInit {

  id = 1;

  get project(): any {
    return PROJECTS.find(p => p.id === this.id);
  }

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.id = message);
  }

  closeSideBar(): void {
    document.getElementById('rightSideBar').click();
  }

}
