import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../../services/titulo.service';
import { NavbarService } from '../../../services/navbar.service';
import { PropiedadIntelectualService } from '../../../services/propiedad-intelectual.service';
@Component({
  selector: 'app-condicion-cinco',
  templateUrl: './condicion-cinco.component.html',
  styleUrls: ['./condicion-cinco.component.css']
})
export class CondicionCincoComponent implements OnInit {
  // BOTON ASPECTOS - PREGUNTAS
  show = false;
  buttonName = 'Aspectos';
  constructor(public prop: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('INVESTIGACIÓN, INNOVACIÓN Y/O CREACIÓN ARTÍSTICA Y CULTURAL');
    this.prop.hide();
    this.nav.show();
  }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) {
      this.buttonName = 'Preguntas';
    } else {
      this.buttonName = 'Aspectos';
    }
  }
}