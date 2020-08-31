import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  closeSidebar(targetDiv): void {
    const element = document.getElementById('sidebarBtn') as HTMLElement ;
    element.click();
    const el = document.getElementById(targetDiv) as HTMLElement;
    el.scrollIntoView();
  }

}
