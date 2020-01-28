import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../../services/titulo.service';
import { NavbarService } from '../../../services/navbar.service';
import { PropiedadIntelectualService } from '../../../services/propiedad-intelectual.service';

@Component({
  selector: 'app-condicion-dos',
  templateUrl: './condicion-dos.component.html',
  styleUrls: ['./condicion-dos.component.css']
})
export class CondicionDosComponent implements OnInit {
  // BOTON ASPECTOS - PREGUNTAS
  show = false;
  buttonName = 'Aspectos';

  // tslint:disable-next-line:max-line-length
  constructor(public prop: PropiedadIntelectualService, public foot: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('JUSTIFICACIÓN DEL PROGRAMA');
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
