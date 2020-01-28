import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../../services/titulo.service';
import { NavbarService } from '../../../services/navbar.service';
import { PropiedadIntelectualService } from '../../../services/propiedad-intelectual.service';
@Component({
  selector: 'app-condicion-cuatro',
  templateUrl: './condicion-cuatro.component.html',
  styleUrls: ['./condicion-cuatro.component.css']
})
export class CondicionCuatroComponent implements OnInit {
  // BOTON ASPECTOS - PREGUNTAS
  show = false;
  buttonName = 'Aspectos';
  constructor(public prop: PropiedadIntelectualService, public foot: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('ORGANIZACIÓN ACTIVIDADES ACADÉMICAS Y PROCESO FORMATIVO');
    this.prop.hidePropiedad();
    this.foot.showFooter();
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
