import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(public auth: AuthService, private firebaseDataService: FirebaseDataService, private _router: Router) {
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
  
  @HostListener('window:scroll')
  private scrollIndicator(): void {


    const isModalOpen =  this._router.url.toString().includes('modal');

    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scrollBar').style.width = scrolled + '%';

    const scrollPoint = 50;
    const nav = document.getElementById('navbar');
    if (window.pageYOffset > scrollPoint || isModalOpen) {
      nav.classList.add("scroll-in");
      nav.classList.remove("scroll-out");
    } else if (window.pageYOffset <= scrollPoint && !isModalOpen) {
      nav.classList.add("scroll-out");
      nav.classList.remove("scroll-in");
    }
  }

}
