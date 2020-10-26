import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SKILLS } from 'src/assets/json/user-info';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  get skills(): any {
    return SKILLS;
  }

  get technicalSkills(): any {
    return of(SKILLS.skills.find(s => s.type === 'TechnicalSkills').skill);
  }

  get softSkills(): Observable<any> {
    return of(SKILLS.skills.find(s => s.type === 'softskills').skill);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
