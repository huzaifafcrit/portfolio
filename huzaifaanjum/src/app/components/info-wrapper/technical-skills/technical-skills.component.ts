import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-technical-skills',
  templateUrl: './technical-skills.component.html',
  styleUrls: ['./technical-skills.component.css']
})
export class TechnicalSkillsComponent implements AfterViewInit {

  size = 10;

  // tslint:disable-next-line: typedef
  ngAfterViewInit() {
    setTimeout(() => {
      this.size = 200;
    }, 50);
  }

}
