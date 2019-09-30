import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../services/titulo.service';
import { NavbarService } from '../../services/navbar.service';
@Component({
  selector: 'app-condicion-cinco',
  templateUrl: './condicion-cinco.component.html',
  styleUrls: ['./condicion-cinco.component.css']
})
export class CondicionCincoComponent implements OnInit {

  constructor(private headerTitleService: TituloService, public nav: NavbarService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('INVESTIGACIÓN, INNOVACIÓN Y/O CREACIÓN ARTISTICA Y CULTURAL');
    this.nav.show();
  }

}
