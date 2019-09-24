import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../../services/titulo.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = '';

  constructor(private headerTitleService: TituloService) {}
  ngOnInit() {
    this.headerTitleService.title.subscribe(updatedTitle => {
      this.title = updatedTitle;
    });
  }
}
