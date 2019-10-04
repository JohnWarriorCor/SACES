import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../services/titulo.service';
import { NavbarService } from '../../services/navbar.service';
import { PropiedadIntelectualService } from '../../services/propiedad-intelectual.service';

@Component({
  selector: 'app-condicion-nueve',
  templateUrl: './condicion-nueve.component.html',
  styleUrls: ['./condicion-nueve.component.css']
})
export class CondicionNueveComponent implements OnInit {

  constructor(public prop: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('INFRAESTRUCTURA FÍSICA Y TECNOLÓGICA');
    this.nav.show();
    this.prop.hide();
  }

}
