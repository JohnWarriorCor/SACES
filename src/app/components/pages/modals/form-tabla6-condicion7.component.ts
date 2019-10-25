import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, NgForm, FormControl, Validators, FormArray } from '@angular/forms';
import { Tabla2Condicion7 } from '../../../interfaces/tabla2Condicion7.interface';
import { Tabla2Condicion7Service } from '../../../services/tabla2-condicion7.service';
import { FuncionesCompartidasService } from '../../../services/funciones-compartidas.service';

@Component({
  selector: 'app-form-tabla6-condicion7',
  templateUrl: './form-tabla6-condicion7.component.html',
  styleUrls: ['./form-tabla6-condicion7.component.css']
})
export class FormTabla6Condicion7Component {
  forma: FormGroup;
  controls: any;
  nuevo = false;
  id: string;
  tabla2cond7: Tabla2Condicion7 = {
    nombregrupinves: '',
    clasificaciongrupinvesA1: '',
    clasificaciongrupinvesA: '',
    clasificaciongrupinvesB: '',
    clasificaciongrupinvesC: '',
    clasificaciongrupinvesR: '',
    otrosgrup: '',
    grupinterdis: '',
  };


  // tslint:disable-next-line:max-line-length
  constructor(private sharedService: FuncionesCompartidasService, private modalService: NgbModal, private _CONDICIONSERVICES: Tabla2Condicion7Service, private router: Router, private activatedRoute: ActivatedRoute, config: NgbModalConfig, public activeModal: NgbActiveModal) {
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
        this._CONDICIONSERVICES.getInvocador( this.id ).subscribe(tabla2cond7 => this.tabla2cond7 = tabla2cond7);
      }
    });
  }
  guardar() {
    console.log(this.tabla2cond7);
    if ( this.id === 'nuevo' ) {
      this._CONDICIONSERVICES.nuevoInvocador(this.tabla2cond7 ).subscribe(data => {
        // this.router.navigate(['/Modal', data.name]);
        this.router.navigate(['/Profesor']);
        this.activeModal.dismiss();
      },
      error => console.error(error));
    } else {
      this._CONDICIONSERVICES.actualizarInvocador( this.tabla2cond7, this.id ).subscribe(data => {
        console.log(data);
        this.router.navigate(['/Profesor']);
        this.activeModal.dismiss();
      },
      error => console.error(error));
    }
  }
  open() {
    const modalRef = this.modalService.open(FormTabla6Condicion7Component);
    modalRef.componentInstance.name = 'World';
  }
  agregarNuevo( forma: NgForm) {
    this.router.navigate(['/Modal', 'nuevo']);
    forma.reset({});
  }
}
