import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../services/titulo.service';
import { NavbarService } from '../../services/navbar.service';
import { PropiedadIntelectualService } from '../../services/propiedad-intelectual.service';
@Component({
  selector: 'app-condicion-cuatro',
  templateUrl: './condicion-cuatro.component.html',
  styleUrls: ['./condicion-cuatro.component.css']
})
export class CondicionCuatroComponent implements OnInit {

  constructor(public prop: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('ORGANIZACIÓN ACTIVIDADES ACADÉMICAS Y PROCESO FORMATIVO');
    this.nav.show();
    this.prop.hide();
  }

}
