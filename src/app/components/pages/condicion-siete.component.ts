import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TituloService } from '../../services/titulo.service';
import { NavbarService } from '../../services/navbar.service';
import { PropiedadIntelectualService } from '../../services/propiedad-intelectual.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
// MODAL
import { Router, ActivatedRoute} from '@angular/router';
import { Tabla1Condicion7Service } from '../../services/tabla1-condicion7.service';
import { Tabla2Condicion7Service } from '../../services/tabla2-condicion7.service';
import { Tabla3Condicion7Service } from '../../services/tabla3-condicion7.service';
import { Tabla4Condicion7Service } from '../../services/tabla4-condicion7.service';
import { Tabla5Condicion7Service } from '../../services/tabla5-condicion7.service';

@Component({
  selector: 'app-condicion-siete',
  templateUrl: './condicion-siete.component.html',
  styleUrls: ['./condicion-siete.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CondicionSieteComponent implements OnInit {
  // BOTON ASPECTOS - PREGUNTAS
  show = false;
  buttonName = 'Aspectos';
  // TABLAS
  closeResult: string;
  tabla1condicione7: any[] = [];
  tabla2condicione7: any[] = [];
  tabla3condicione7: any[] = [];
  tabla4condicione7: any[] = [];
  tabla5condicione7: any[] = [];
  loading = true;
  modalReference: any;
  // tslint:disable-next-line:max-line-length
  constructor( private router: Router, private activatedRoute: ActivatedRoute, private ServicioTabla1: Tabla1Condicion7Service, private ServicioTabla2: Tabla2Condicion7Service, private ServicioTabla3: Tabla3Condicion7Service, private ServicioTabla4: Tabla4Condicion7Service, private ServicioTabla5: Tabla5Condicion7Service, private modalService: NgbModal, public prop: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService) {
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
    this.nav.show();
    this.prop.hide();
  }
  openSm1(content) {
    this.modalReference = this.modalService.open(content, { size: 'sm' });
  }
  openSm2(content) {
    this.modalReference = this.modalService.open(content, { size: 'sm' });
  }
  openSm3(content) {
    this.modalReference = this.modalService.open(content, { size: 'sm' });
  }
  openSm4(content) {
    this.modalReference = this.modalService.open(content, { size: 'sm' });
  }
  openSm5(content) {
    this.modalReference = this.modalService.open(content, { size: 'sm' });
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
