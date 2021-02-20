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
}
