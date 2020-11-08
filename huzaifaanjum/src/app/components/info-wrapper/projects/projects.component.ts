import { Component, OnInit } from '@angular/core';
import { PROJECTS } from 'src/assets/json/user-info';
import { of } from 'rxjs';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  id: null;
  get projects(): any {
  return of(PROJECTS);
  }

  constructor(private data: DataService) { }

  ngOnInit(): void {
  }
  showDetails(id): void {
    this.data.changeMessage(id);
    document.getElementById('rightSideBar').click();
  }


}
