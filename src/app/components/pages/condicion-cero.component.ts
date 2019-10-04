import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { TituloService } from '../../services/titulo.service';
import { PropiedadIntelectualService } from '../../services/propiedad-intelectual.service';

@Component({
  selector: 'app-condicion-cero',
  templateUrl: './condicion-cero.component.html',
  styleUrls: ['./condicion-cero.component.css']
})
export class CondicionCeroComponent implements OnInit {

  constructor(public prop: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('HISTORIA INSTITUCIONAL Y DE PROGRAMA');
    this.nav.show();
    this.prop.hide();
  }

}
