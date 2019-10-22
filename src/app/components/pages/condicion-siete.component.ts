import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TituloService } from '../../services/titulo.service';
import { NavbarService } from '../../services/navbar.service';
import { PropiedadIntelectualService } from '../../services/propiedad-intelectual.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormTabla2Condicion7Component } from './modals/form-tabla2-condicion7.component';
import { ModalUnoComponent } from './modal-uno.component';
import { Tabla2Condicion7Service } from '../../services/tabla2-condicion7.service';
// MODAL
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, NgForm, FormControl, Validators, FormArray } from '@angular/forms';
import { Tabla2Condicion7 } from '../../interfaces/tabla2Condicion7.interface';
import { ModalContainerComponent } from 'src/app/modal-container.component';
import { Routes, RouterModule } from '@angular/router';
import { FormTabla1Condicion7Component } from './modals/form-tabla1-condicion7.component';

@Component({
  selector: 'app-condicion-siete',
  templateUrl: './condicion-siete.component.html',
  styleUrls: ['./condicion-siete.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CondicionSieteComponent implements OnInit {
  closeResult: string;
  tabla2condicione7: any[] = [];
  loading = true;
  modalReference: any;
  // tslint:disable-next-line:max-line-length
  constructor( private router: Router, private activatedRoute: ActivatedRoute, private _CONDICIONES1SERVICE: Tabla2Condicion7Service, private modalService: NgbModal, public prop: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService) {
    this._CONDICIONES1SERVICE.getInvocadores().subscribe( data => {
      setTimeout(() => {
        this.loading = false;
        this.tabla2condicione7 = data;
      }, 0);
    });
  }
  borrarInvocador( key$: string) {
    this._CONDICIONES1SERVICE.borrarInvocador(key$).subscribe( respuesta => {
      if ( respuesta ) {
        console.error(respuesta);
      } else {
        delete this.tabla2condicione7[key$];
        this.modalReference.close();
      }
    });
  }
  ngOnInit() {
    this.headerTitleService.setTitle('PROFESORES');
    this.nav.show();
    this.prop.hide();
  }
  openSm(content) {
    this.modalReference = this.modalService.open(content, { size: 'sm' });
  }
  open() {
    const modalRef = this.modalService.open(FormTabla2Condicion7Component);
    modalRef.componentInstance.name = 'World';
  }
  open2() {
    const modalRef = this.modalService.open(FormTabla1Condicion7Component);
    modalRef.componentInstance.name = 'World';
  }

}
