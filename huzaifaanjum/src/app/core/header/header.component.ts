import { Component, OnInit, HostListener } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from 'src/app/services/auth.service';
import { FirebaseDataService } from 'src/app/services/firebase-data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  url: any;

  constructor(public auth: AuthService, private firebaseDataService: FirebaseDataService) {
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

    const scrollPoint = 100;
    const nav = document.getElementById('navbar');
    if (window.pageYOffset > scrollPoint) {
      nav.classList.add("scroll");
    } else if (window.pageYOffset <= scrollPoint) {
      nav.classList.remove("scroll");
    }

  }

  scrollToSection(section): void{
    const element = document.getElementById(section);
    element.scrollIntoView();
  }

  toggleSideBar(): void {
    document.getElementById('sideBarToggle').click();
  }

  signIn(): void {
    this.auth.googleSignin().then(() =>
    {
      this.loggedIn = true;
    });
  }

  signOut(): void {
    this.auth.signout().then(() => this.loggedIn = false);
    this.url = '';
  }

  downloadResume(): void {
    // Create a reference to the file we want to download
    const storage = firebase.storage();
    const gsReference = storage.refFromURL(environment.gsRefpath);
    gsReference.getDownloadURL().then((url) => {
      window.open(url);
    },
    err => console.log(err)
    );
  }

}
