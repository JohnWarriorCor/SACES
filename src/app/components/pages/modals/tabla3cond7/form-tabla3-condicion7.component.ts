import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, NgForm, FormControl, Validators, FormArray } from '@angular/forms';
import { FuncionesCompartidasService } from '../../../../services/funciones-compartidas.service';
import { Tabla3Condicion7 } from '../../../../interfaces/tabla3-condicion7';
import { Tabla3Condicion7Service } from '../../../../services/tabla3-condicion7.service';

@Component({
  selector: 'app-form-tabla3-condicion7',
  templateUrl: './form-tabla3-condicion7.component.html',
  styleUrls: ['./form-tabla3-condicion7.component.css']
})
export class FormTabla3Condicion7Component {
  // Variables para cantidad de profesores
  tipoa = 0;
  tipotop = 0;
  totalClasi = 0;
  // -------------------------------------
  forma: FormGroup;
  controls: any;
  nuevo = false;
  id: string;
  tabla3cond7: Tabla3Condicion7 = {
    nombregrup: '',
    tipoA: '',
    tipoTop: '',
    total: '',
  };


  // tslint:disable-next-line:max-line-length
  constructor(private sharedService: FuncionesCompartidasService, private modalService: NgbModal, private _CONDICIONSERVICES: Tabla3Condicion7Service, private router: Router, private activatedRoute: ActivatedRoute, config: NgbModalConfig, public activeModal: NgbActiveModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
    console.log('A VER QUE SALE', this.id);
    this.activatedRoute.params.subscribe( parametros => {
      this.id = this.sharedService.componentOneFn1;
      console.log('Los supuestos parametros', parametros.id);
      console.log('SI PASÓ POR ACÁ');
      console.log(this.id);
      if ( this.id !== 'nuevo' ) {
        this._CONDICIONSERVICES.getInvocador( this.id ).subscribe(tabla3cond7 => this.tabla3cond7 = tabla3cond7);
      }
    });
  }
  guardar() {
    console.log(this.tabla3cond7);
    if ( this.id === 'nuevo' ) {
      this._CONDICIONSERVICES.nuevoInvocador(this.tabla3cond7 ).subscribe(data => {
        // this.router.navigate(['/Modal', data.name]);
        this.router.navigate(['/Profesor']);
        this.activeModal.dismiss();
      },
      error => console.error(error));
    } else {
      this._CONDICIONSERVICES.actualizarInvocador( this.tabla3cond7, this.id ).subscribe(data => {
        console.log(data);
        this.router.navigate(['/Profesor']);
        this.activeModal.dismiss();
      },
      error => console.error(error));
    }
  }
  open() {
    const modalRef = this.modalService.open(FormTabla3Condicion7Component);
    modalRef.componentInstance.name = 'World';
  }
  agregarNuevo( forma: NgForm) {
    this.router.navigate(['/ModalTabla1', 'nuevo']);
    forma.reset({});
  }
  calcularTipoClasificacion() {
    // tslint:disable-next-line:max-line-length
    this.totalClasi = this.tipoa + this.tipotop ;
    this.tabla3cond7.total = '' + this.totalClasi;
    return this.totalClasi;
  }
}
