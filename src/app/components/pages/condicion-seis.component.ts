import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../services/titulo.service';
import { NavbarService } from '../../services/navbar.service';
import { PropiedadIntelectualService } from '../../services/propiedad-intelectual.service';


@Component({
  selector: 'app-condicion-seis',
  templateUrl: './condicion-seis.component.html',
  styleUrls: ['./condicion-seis.component.css']
})
export class CondicionSeisComponent implements OnInit {

  constructor(public prop: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('RELACIÓN CON EL SECTOR EXTERNO');
    this.prop.hide();
    this.nav.show();
  }

}
