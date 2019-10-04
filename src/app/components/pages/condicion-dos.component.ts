import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../services/titulo.service';
import { NavbarService } from '../../services/navbar.service';
import { PropiedadIntelectualService } from '../../services/propiedad-intelectual.service';

@Component({
  selector: 'app-condicion-dos',
  templateUrl: './condicion-dos.component.html',
  styleUrls: ['./condicion-dos.component.css']
})
export class CondicionDosComponent implements OnInit {

  constructor(public prop: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('JUSTIFICACIÓN DEL PROGRAMA');
    this.nav.show();
    this.prop.hide();
  }

}
