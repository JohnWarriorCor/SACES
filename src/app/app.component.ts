import { Component } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SACES';
  onActivate(event) {
    window.scroll(0, 0);
    document.querySelector('body').scrollTo(0, 0);
  }
}
