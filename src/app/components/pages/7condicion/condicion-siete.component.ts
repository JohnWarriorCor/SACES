import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TituloService } from '../../../services/titulo.service';
import { NavbarService } from '../../../services/navbar.service';
import { PropiedadIntelectualService } from '../../../services/propiedad-intelectual.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// MODAL
import { Router, ActivatedRoute} from '@angular/router';
import { Tabla1Condicion7Service } from '../../../services/tabla1-condicion7.service';
import { Tabla2Condicion7Service } from '../../../services/tabla2-condicion7.service';
import { Tabla3Condicion7Service } from '../../../services/tabla3-condicion7.service';
import { Tabla4Condicion7Service } from '../../../services/tabla4-condicion7.service';
import { Tabla5Condicion7Service } from '../../../services/tabla5-condicion7.service';
import { Tabla2Condicion7 } from '../../../interfaces/tabla2Condicion7.interface';

@Component({
  selector: 'app-condicion-siete',
  templateUrl: './condicion-siete.component.html',
  styleUrls: ['./condicion-siete.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CondicionSieteComponent implements OnInit {
  tabla1Oculta = false;
  pageTabla1 = 1;
  pageSizeTabla1 = 1;
  pageTabla2 = 1;
  pageSizeTabla2 = 10;
  pageTabla3 = 1;
  pageSizeTabla3 = 10;
  pageTabla4 = 1;
  pageSizeTabla4 = 10;
  pageTabla5 = 1;
  pageSizeTabla5 = 10;
  pageTabla6 = 1;
  pageSizeTabla6 = 5;
  // BOTON ASPECTOS - PREGUNTAS
  show = false;
  buttonName = 'Aspectos';
  // TABLAS
  closeResult: string;
  tabla1condicione7: any[] = [];
  tabla2condicione7: any[] = [];
  order = 'nombregrupinves';
  tabla3condicione7: any[] = [];
  tabla4condicione7: any[] = [];
  tabla5condicione7: any[] = [];
  loading = true;
  modalReference: any;
  // tslint:disable-next-line:max-line-length
  constructor( private router: Router, private activatedRoute: ActivatedRoute, private ServicioTabla1: Tabla1Condicion7Service, private ServicioTabla2: Tabla2Condicion7Service, private ServicioTabla3: Tabla3Condicion7Service, private ServicioTabla4: Tabla4Condicion7Service, private ServicioTabla5: Tabla5Condicion7Service, private modalService: NgbModal, public prop: PropiedadIntelectualService, public foot: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService) {
    this.ServicioTabla1.getInvocadores().subscribe( data => {
      setTimeout(() => {
        this.loading = false;
        this.tabla1condicione7 = data;
      }, 0);
    });
    this.ServicioTabla2.getInvocadores().subscribe( data => {
      setTimeout(() => {
        this.loading = false;
        this.tabla2condicione7 = data;
      }, 0);
    });
    this.ServicioTabla3.getInvocadores().subscribe( data => {
      setTimeout(() => {
        this.loading = false;
        this.tabla3condicione7 = data;
      }, 0);
    });
    this.ServicioTabla4.getInvocadores().subscribe( data => {
      setTimeout(() => {
        this.loading = false;
        this.tabla4condicione7 = data;
      }, 0);
    });
    this.ServicioTabla5.getInvocadores().subscribe( data => {
      setTimeout(() => {
        this.loading = false;
        this.tabla5condicione7 = data;
      }, 0);
    });
  }
  borrarRegistroTabla1( key$: string) {
    this.ServicioTabla1.borrarInvocador(key$).subscribe( respuesta => {
      if ( respuesta ) {
        console.error(respuesta);
      } else {
        delete this.tabla1condicione7[key$];
        this.modalReference.close();
      }
    });
  }
  borrarRegistroTabla2( key$: string) {
    this.ServicioTabla2.borrarInvocador(key$).subscribe( respuesta => {
      if ( respuesta ) {
        console.error(respuesta);
      } else {
        delete this.tabla2condicione7[key$];
        this.modalReference.close();
      }
    });
  }
  borrarRegistroTabla3( key$: string) {
    this.ServicioTabla3.borrarInvocador(key$).subscribe( respuesta => {
      if ( respuesta ) {
        console.error(respuesta);
      } else {
        delete this.tabla3condicione7[key$];
        this.modalReference.close();
      }
    });
  }
  borrarRegistroTabla4( key$: string) {
    this.ServicioTabla4.borrarInvocador(key$).subscribe( respuesta => {
      if ( respuesta ) {
        console.error(respuesta);
      } else {
        delete this.tabla4condicione7[key$];
        this.modalReference.close();
      }
    });
  }
  borrarRegistroTabla5( key$: string) {
    this.ServicioTabla5.borrarInvocador(key$).subscribe( respuesta => {
      if ( respuesta ) {
        console.error(respuesta);
      } else {
        delete this.tabla5condicione7[key$];
        this.modalReference.close();
      }
    });
  }
  ngOnInit() {
    this.headerTitleService.setTitle('PROFESORES');
    this.prop.hidePropiedad();
    this.foot.showFooter();
  }
  activarPrint() {
    this.tabla1Oculta = true;
  }
  openSm1(content) {
    this.modalReference = this.modalService.open(content, { size: 'sm', centered: true });
  }
  openSm2(content) {
    this.modalReference = this.modalService.open(content, { size: 'sm', centered: true });
  }
  openSm3(content) {
    this.modalReference = this.modalService.open(content, { size: 'sm', centered: true });
  }
  openSm4(content) {
    this.modalReference = this.modalService.open(content, { size: 'sm', centered: true });
  }
  openSm5(content) {
    this.modalReference = this.modalService.open(content, { size: 'sm', centered: true });
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
