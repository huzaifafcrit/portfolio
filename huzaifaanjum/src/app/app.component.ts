import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'huzaifaanjum';
  loading = true;

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1);
  }

  onScroll(): void {
    this.scrollIndicator();
  }

  private scrollIndicator(): void {

    const el = document.getElementById('content-container');

    const winScroll = el.scrollTop;
    const height = el.scrollHeight - el.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById('scrollBar').style.width = scrolled + '%';


    const scrollPoint = 50;
    const nav = document.getElementById('navbar');
    if (el.scrollTop > scrollPoint) {
      nav.classList.add("scroll-in");
      nav.classList.remove("scroll-out");
    } else if (el.scrollTop <= scrollPoint) {
      nav.classList.add("scroll-out");
      nav.classList.remove("scroll-in");
    }
  }
}
