import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Condicion2Service } from '../../../services/condicion2.service';
import { NavbarService } from '../../../services/navbar.service';
import { TituloService } from '../../../services/titulo.service';
import { formatDate } from '@fullcalendar/core';
import { PropiedadIntelectualService } from '../../../services/propiedad-intelectual.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registro-con2',
  templateUrl: './registro-con2.component.html',
  styleUrls: ['./registro-con2.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistroCon2Component implements OnInit {
  key: any;
  opciones = false;
  ajustes = true;
  validar = false;
  error = false;
  passError = '';

  page = 1;
  pageSize = 1;
  closeResult: string;
  acumFechas = 0;
  comodinAcum = 0;
  modalReference: any;
  condiciones2: any[] = [];
  loading = true;

  constructor(private modalService: NgbModal, public prop: PropiedadIntelectualService, public foot: PropiedadIntelectualService, private _CONDICIONES2SERVICE: Condicion2Service, public nav: NavbarService, public headerTitleService: TituloService ) {
    this._CONDICIONES2SERVICE.getCondiciones2().subscribe( data => {
      this.loading = false;
      this.condiciones2 = data;
    });
  }
  openSm(content) {
    this.modalReference = this.modalService.open(content, { size: 'sm', centered: true });
  }
  ngOnInit() {
    this.headerTitleService.setTitle('JUSTIFICACIÓN DEL PROGRAMA');
    this.nav.show();
    this.prop.hidePropiedad();
    this.foot.showFooter();
  }
  borrarCondicion2( key$: string) {
    this._CONDICIONES2SERVICE.borrarCondicion2(key$).subscribe( respuesta => {
      if ( respuesta ) {
        console.error(respuesta);
      } else {
        delete this.condiciones2[key$];
        this.modalReference.close();
      }
    });
  }
  viewAujstes() {
    this.validar = false;
    this.ajustes = true;
  }
  viewValidar() {
    this.ajustes = false;
    this.validar = true;
  }
  viewOpciones(pass) {
    console.log('Hola');
    if ( pass === '7183' ) {
      this.validar = false;
      this.opciones = true;
    } else {
      this.error = true;
      this.passError = 'Contraseña equivocada';
    }
  }

}
