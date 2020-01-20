import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, NgForm, FormControl, Validators, FormArray } from '@angular/forms';
import { FuncionesCompartidasService } from '../../../../services/funciones-compartidas.service';
import {formatDate } from '@angular/common';
import { Tabla4Condicion7Service } from '../../../../services/tabla4-condicion7.service';
import { Tabla4Condicion7 } from '../../../../interfaces/tabla4-condicion7';

@Component({
  selector: 'app-form-tabla4-condicion7',
  templateUrl: './form-tabla4-condicion7.component.html',
  styleUrls: ['./form-tabla4-condicion7.component.css']
})
export class FormTabla4Condicion7Component implements OnInit {
  year = new Date().getFullYear();
  yearStrin = '';
  range = [];
  forma: FormGroup;
  controls: any;
  nuevo = false;
  id: string;
  tabla4cond7: Tabla4Condicion7 = {
    anio: '',
    periodo: '',
    estudiantesIns: '',
    graduados: '',
    egresados: '',
    tasaDesSpa: '',
    tasaDes: '',
  };


  // tslint:disable-next-line:max-line-length
  constructor(private sharedService: FuncionesCompartidasService, private modalService: NgbModal, private _CONDICIONSERVICES: Tabla4Condicion7Service, private router: Router, private activatedRoute: ActivatedRoute, config: NgbModalConfig, public activeModal: NgbActiveModal) {
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
        this._CONDICIONSERVICES.getInvocador( this.id ).subscribe(tabla4cond7 => this.tabla4cond7 = tabla4cond7);
      }
    });
  }
  ngOnInit() {
    this.generateYear();
  }
  generateYear() {
    this.year = this.year - 10;
    for ( let i = 1; i < 15; i++) {
      this.yearStrin = String(this.year + i);
      this.range.push(this.yearStrin);
    }
    return this.range;
  }
  guardar() {
    console.log(this.tabla4cond7);
    if ( this.id === 'nuevo' ) {
      this._CONDICIONSERVICES.nuevoInvocador(this.tabla4cond7 ).subscribe(data => {
        // this.router.navigate(['/Modal', data.name]);
        this.router.navigate(['/Profesor']);
        this.activeModal.dismiss();
      },
      error => console.error(error));
    } else {
      this._CONDICIONSERVICES.actualizarInvocador( this.tabla4cond7, this.id ).subscribe(data => {
        console.log(data);
        this.router.navigate(['/Profesor']);
        this.activeModal.dismiss();
      },
      error => console.error(error));
    }
  }
  open() {
    const modalRef = this.modalService.open(FormTabla4Condicion7Component);
    modalRef.componentInstance.name = 'World';
  }
  agregarNuevo( forma: NgForm) {
    this.router.navigate(['/ModalTabla4', 'nuevo']);
    forma.reset({});
  }
}
