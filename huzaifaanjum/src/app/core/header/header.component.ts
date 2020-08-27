import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  loggedIn = false;

  scrollToSection(section) {
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
