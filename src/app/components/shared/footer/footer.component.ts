import { Component, OnInit } from '@angular/core';
import { formatDate } from '@fullcalendar/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  today = new Date();
  constructor() { }

  ngOnInit() {
  }

}
