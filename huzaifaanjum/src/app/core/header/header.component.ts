import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

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

  toggleSideBar() {
    // sidenav.toggle()
  }

  signIn() {
    // this.auth.googleSignin().then(() => this.loggedIn = true);
  }

  signOut() {
    // this.auth.signout().then(() => this.loggedIn = false);
  }

}
