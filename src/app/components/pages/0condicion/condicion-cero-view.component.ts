import { Component, OnInit, Input, ViewEncapsulation  } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { TituloService } from '../../../services/titulo.service';
import { PropiedadIntelectualService } from '../../../services/propiedad-intelectual.service';
import { formatDate } from '@fullcalendar/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HistoriaInstService } from '../../../services/historia-inst.service';

@Component({
  selector: 'app-condicion-cero-view',
  templateUrl: './condicion-cero-view.component.html',
  styleUrls: ['./condicion-cero-view.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CondicionCeroViewComponent implements OnInit {

  closeResult: string;
  acumFechas = 0;
  comodinAcum = 0;
  modalReference: any;
  historia: any[] = [];
  loading = true;
  // Herramientas ocultas
  key: any;
  opciones = false;
  ajustes = true;
  validar = false;
  error = false;
  passError = '';
  // tslint:disable-next-line:max-line-length
  constructor(private modalService: NgbModal, public prop: PropiedadIntelectualService, public foot: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService, private _CONDICIONES1SERVICE: HistoriaInstService) {
    this._CONDICIONES1SERVICE.getHistorias().subscribe( data => {
      this.historia = data;
    });
  }

  ngOnInit() {
    this.headerTitleService.setTitle('HISTORIA INSTITUCIONAL Y DE PROGRAMA');
    this.nav.show();
    this.prop.hidePropiedad();
    this.foot.showFooter();
  }
  openSm(content) {
    this.modalReference = this.modalService.open(content, { size: 'sm', centered: true });
  }

  borrarHistoria( key$: string) {
    this._CONDICIONES1SERVICE.borrarHistoria(key$).subscribe( respuesta => {
      if ( respuesta ) {
        console.error(respuesta);
      } else {
        delete this.historia[key$];
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
