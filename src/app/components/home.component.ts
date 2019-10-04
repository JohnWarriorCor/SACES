import { Component, OnInit } from '@angular/core';
import { TituloService } from '../services/titulo.service';
import { NavbarService } from '../services/navbar.service';
import { PropiedadIntelectualService } from '../services/propiedad-intelectual.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hover0 = false;
  hover1 = false;
  hover2 = false;
  hover3 = false;
  hover4 = false;
  hover5 = false;
  hover6 = false;
  hover7 = false;
  hover8 = false;
  hover9 = false;
  constructor(private headerTitleService: TituloService, public nav: NavbarService, public prop: PropiedadIntelectualService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('Condiciones de Calidad para la Creación y Funcionamiento de Programas Académicos');
    this.nav.hide();
    this.prop.show();
  }

}
