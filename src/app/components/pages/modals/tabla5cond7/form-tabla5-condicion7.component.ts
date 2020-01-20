import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, NgForm, FormControl, Validators, FormArray } from '@angular/forms';
import { FuncionesCompartidasService } from '../../../../services/funciones-compartidas.service';
import { Tabla5Condicion7 } from '../../../../interfaces/tabla5-condicion7';
import { Tabla5Condicion7Service } from '../../../../services/tabla5-condicion7.service';

@Component({
  selector: 'app-form-tabla5-condicion7',
  templateUrl: './form-tabla5-condicion7.component.html',
  styleUrls: ['./form-tabla5-condicion7.component.css']
})
export class FormTabla5Condicion7Component implements OnInit {
  // Variables para generar fecha en select
  year = new Date().getFullYear();
  yearStrin = '';
  range = [];
  // ---
  forma: FormGroup;
  controls: any;
  nuevo = false;
  id: string;
  tabla5cond7: Tabla5Condicion7 = {
    anio: '',
    periodo: '',
    TC: '',
    MT: '',
    C: '',
    tiempoDoc: '',
    tiempoInv: '',
    tiempoExt: '',
  };


  // tslint:disable-next-line:max-line-length
  constructor(private sharedService: FuncionesCompartidasService, private modalService: NgbModal, private _CONDICIONSERVICES: Tabla5Condicion7Service, private router: Router, private activatedRoute: ActivatedRoute, config: NgbModalConfig, public activeModal: NgbActiveModal) {
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
        this._CONDICIONSERVICES.getInvocador( this.id ).subscribe(tabla5cond7 => this.tabla5cond7 = tabla5cond7);
      }
    });
  }
  guardar() {
    console.log(this.tabla5cond7);
    if ( this.id === 'nuevo' ) {
      this._CONDICIONSERVICES.nuevoInvocador(this.tabla5cond7 ).subscribe(data => {
        // this.router.navigate(['/Modal', data.name]);
        this.router.navigate(['/Profesor']);
        this.activeModal.dismiss();
      },
      error => console.error(error));
    } else {
      this._CONDICIONSERVICES.actualizarInvocador( this.tabla5cond7, this.id ).subscribe(data => {
        console.log(data);
        this.router.navigate(['/Profesor']);
        this.activeModal.dismiss();
      },
      error => console.error(error));
    }
  }
  open() {
    const modalRef = this.modalService.open(FormTabla5Condicion7Component);
    modalRef.componentInstance.name = 'World';
  }
  agregarNuevo( forma: NgForm) {
    this.router.navigate(['/ModalTabla5', 'nuevo']);
    forma.reset({});
  }
  generateYear() {
    this.year = this.year - 10;
    for ( let i = 1; i < 15; i++) {
      this.yearStrin = String(this.year + i);
      this.range.push(this.yearStrin);
    }
    return this.range;
  }
  ngOnInit() {
    this.generateYear();
  }
}

