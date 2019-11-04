import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, NgForm, FormControl, Validators, FormArray } from '@angular/forms';
import { Tabla2Condicion7 } from '../../../interfaces/tabla2Condicion7.interface';
import { Tabla2Condicion7Service } from '../../../services/tabla2-condicion7.service';
import { FuncionesCompartidasService } from '../../../services/funciones-compartidas.service';

@Component({
  selector: 'app-form-tabla1-condicion7',
  templateUrl: './form-tabla1-condicion7.component.html',
  styleUrls: ['./form-tabla1-condicion7.component.css']
})
export class FormTabla1Condicion7Component implements OnInit {
  // Variables para cantidad de profesores
  tcTecnico = 0;
  tcTecnologo = 0;
  tcProfesional = 0;
  tcEspecialista = 0;
  tcMagister = 0;
  tcDoctores = 0;
  tcPosdoctorado = 0;
  totalTc = 0;
  // ----------------
  mtTecnico = 0;
  mtTecnologo = 0;
  mtProfesional = 0;
  mtEspecialista = 0;
  mtMagister = 0;
  mtDoctores = 0;
  mtPosdoctorado = 0;
  totalMt = 0;
  // ----------------
  cTecnico = 0;
  cTecnologo = 0;
  cProfesional = 0;
  cEspecialista = 0;
  cMagister = 0;
  cDoctores = 0;
  cPosdoctorado = 0;
  totalC = 0;
  // Variables para generar fecha en select
  year = new Date().getFullYear();
  yearStrin = '';
  range = [];
  // Variables para modal
  currentJustify = 'start';
  // Variables para CRUD
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
    const modalRef = this.modalService.open(FormTabla1Condicion7Component);
    modalRef.componentInstance.name = 'World';
  }
  generateYear() {
    this.year = this.year - 10;
    for ( let i = 1; i < 15; i++) {
      this.yearStrin = String(this.year + i);
      this.range.push(this.yearStrin);
    }
    return this.range;
  }
  agregarNuevo( forma: NgForm) {
    this.router.navigate(['/Modal', 'nuevo']);
    forma.reset({});
  }
  ngOnInit() {
    this.generateYear();
  }
  calcularProfesoresTc() {
    // tslint:disable-next-line:max-line-length
    this.totalTc = (this.tcTecnico + this.tcTecnologo + this.tcProfesional + this.tcEspecialista + this.tcMagister + this.tcDoctores + this.tcPosdoctorado );
    return this.totalTc;
  }
  calcularProfesoresMt() {
    // tslint:disable-next-line:max-line-length
    this.totalMt = (this.mtTecnico + this.mtTecnologo + this.mtProfesional + this.mtEspecialista + this.mtMagister + this.mtDoctores + this.mtPosdoctorado );
    return this.totalMt;
  }
  calcularProfesoresC() {
    // tslint:disable-next-line:max-line-length
    this.totalC = (this.cTecnico + this.cTecnologo + this.tcProfesional + this.cEspecialista + this.cMagister + this.cDoctores + this.cPosdoctorado );
    return this.totalC;
  }
}
