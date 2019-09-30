import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../services/titulo.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-condicion-siete',
  templateUrl: './condicion-siete.component.html',
  styleUrls: ['./condicion-siete.component.css']
})
export class CondicionSieteComponent implements OnInit {

  constructor(private headerTitleService: TituloService, public nav: NavbarService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('PROFESORES');
    this.nav.show();
  }

}
