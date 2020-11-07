import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public auth: AuthService) {
    this.auth.user$.subscribe( (user) => {
      if (user !== null) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  }
  showNavItems: boolean;
  loggedIn = false;

  @HostListener('window:scroll')
  public scrollIndicator(): void {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scrollBar').style.width = scrolled + '%';
  }

  scrollToSection(section): void{
    const element = document.getElementById(section);
    element.scrollIntoView();
  }

  toggleSideBar(): void {
    document.getElementById('sideBarToggle').click();
  }

  signIn(): void {
    this.auth.googleSignin().then(() => this.loggedIn = true);
  }

  signOut(): void {
    this.auth.signout().then(() => this.loggedIn = false);
  }

}
