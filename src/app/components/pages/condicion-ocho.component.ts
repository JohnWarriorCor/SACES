import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../services/titulo.service';
import { NavbarService } from '../../services/navbar.service';
import { PropiedadIntelectualService } from '../../services/propiedad-intelectual.service';

@Component({
  selector: 'app-condicion-ocho',
  templateUrl: './condicion-ocho.component.html',
  styleUrls: ['./condicion-ocho.component.css']
})
export class CondicionOchoComponent implements OnInit {

  constructor(public prop: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('MEDIOS EDUCATIVOS');
    this.nav.show();
    this.prop.hide();
  }

}
