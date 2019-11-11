import { Component, OnInit } from '@angular/core';
import { Runner } from 'protractor';
import { formatDate } from '@angular/common';
import { Router, ActivatedRoute} from '@angular/router';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { of } from 'rxjs';
/*MODAL FUNCIONAL ERROR CIERRA RAPIDO
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalUnoComponent } from './modal-uno.component';
*/
// import { ModalUnoComponent } from './modal-uno.component';
// import {MatDialog} from '@angular/material/dialog';
import { NavbarService } from '../../services/navbar.service';
import { TituloService } from '../../services/titulo.service';
import { FormGroup, NgForm, FormControl, Validators, FormArray } from '@angular/forms';
import { Condicion1 } from '../../interfaces/condicion1.interface';
import { Condicion1Service } from '../../services/condicion1.service';
import { PropiedadIntelectualService } from '../../services/propiedad-intelectual.service';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalUnoComponent } from './modal-uno.component';
@Component({
  selector: 'app-condicion-uno',
  templateUrl: './condicion-uno.component.html',
  styleUrls: ['./condicion-uno.component.css'],
  providers: [NgbProgressbarConfig]
})
export class CondicionUnoComponent implements OnInit {
  acumPuntos = 0.0;
  acumPuntos1 = 0.0;
  acumPuntos2 = 0.0;
  acumPuntos3 = 0.0;
  acumPuntos4 = 0.0;
  acumPuntos5 = 0.0;
  acumPuntos6 = 0.0;
  acumPuntos7 = 0.0;
  acumPuntos8 = 0.0;
  textoPuntos = '';
  // CONEXION FIREBASE BD
  forma: FormGroup;
  controls: any;
  nuevo = false;
  id: string;
  cond1: Condicion1 = {
    tipoprograma: '',
    nombreprograma: '',
    respnombre: '',
    datenombre: '',
    titulo: '',
    resptitulo: '',
    datetitulo: '',
    respcontenido: '',
    datecontenido: '',
    observa: '',
    pregunta11: '',
    pregunta21: '',
    pregunta31: '',
    pregunta41: '',
  };
  // FECHA
  formato = 1000 * 60 * 60 * 24;
  today = new Date();
  res1 = -10000;
  res2 = -10000;
  res3 = -10000;
  resultado = new Date();
  fecha1 = new Date('09/20/2019');
  fecha1Id = 0;
  fecha2Id = 0;
  fecha3Id = 0;
  jstoday = '';
  // tslint:disable-next-line:max-line-length
  constructor(private modalService: NgbModal, config: NgbProgressbarConfig, public prop: PropiedadIntelectualService, public nav: NavbarService, private headerTitleService: TituloService, private _CONDICIONSERVICES: Condicion1Service, private router: Router, private activatedRoute: ActivatedRoute) {
    config.striped = true;
    config.animated = true;
    console.log(this.today);
    console.log(this.fecha1);
    // this.res = diferenciaEntreDiasEnDias(this.fecha1, this.today);
    // console.log(this.res);
    this.jstoday = formatDate(this.today, 'dd/MM/yyyy', 'en-US', '-0500');
    console.log('A VER QUE SALE', this.id);
    this.activatedRoute.params.subscribe( parametros => {
      this.id = parametros.id;
      console.log('Los supuestos parametros', parametros.id);
      console.log('SI PASÓ POR ACÁ');
      console.log(this.id);
      if ( this.id !== 'nuevo' ) {
        this._CONDICIONSERVICES.getInvocador( this.id ).subscribe(cond1 => this.cond1 = cond1);
      }
    });
  }
  open() { }
  progreso() {
    this.acumPuntos = this.acumPuntos + 8;
    this.textoPuntos = String(this.acumPuntos);
    this.textoPuntos = this.textoPuntos + '%';
    console.log(this.textoPuntos);
    return [this.acumPuntos, this.textoPuntos];
  }
  progreso1() {
    this.acumPuntos1 = this.acumPuntos1 + 100;
    this.textoPuntos = String(this.acumPuntos1);
    this.textoPuntos = this.textoPuntos + '%';
    console.log(this.textoPuntos);
    return [this.acumPuntos1, this.textoPuntos];
  }
  progreso2() {
    this.acumPuntos2 = this.acumPuntos2 + 34;
    this.textoPuntos = String(this.acumPuntos2);
    this.textoPuntos = this.textoPuntos + '%';
    console.log(this.textoPuntos);
    return [this.acumPuntos2, this.textoPuntos];
  }
  progreso3() {
    this.acumPuntos3 = this.acumPuntos3 + 34;
    this.textoPuntos = String(this.acumPuntos3);
    this.textoPuntos = this.textoPuntos + '%';
    console.log(this.textoPuntos);
    return [this.acumPuntos3, this.textoPuntos];
  }
  progreso4() {
    this.acumPuntos4 = this.acumPuntos4 + 34;
    this.textoPuntos = String(this.acumPuntos4);
    this.textoPuntos = this.textoPuntos + '%';
    console.log(this.textoPuntos);
    return [this.acumPuntos4, this.textoPuntos];
  }
  progreso5() {
    this.acumPuntos5 = this.acumPuntos5 + 50;
    this.textoPuntos = String(this.acumPuntos5);
    this.textoPuntos = this.textoPuntos + '%';
    console.log(this.textoPuntos);
    return [this.acumPuntos5, this.textoPuntos];
  }
  progreso6() {
    this.acumPuntos6 = this.acumPuntos6 + 50;
    this.textoPuntos = String(this.acumPuntos6);
    this.textoPuntos = this.textoPuntos + '%';
    console.log(this.textoPuntos);
    return [this.acumPuntos6, this.textoPuntos];
  }
  progreso7() {
    this.acumPuntos7 = this.acumPuntos7 + 50;
    this.textoPuntos = String(this.acumPuntos7);
    this.textoPuntos = this.textoPuntos + '%';
    console.log(this.textoPuntos);
    return [this.acumPuntos7, this.textoPuntos];
  }
  progreso8() {
    this.acumPuntos8 = this.acumPuntos8 + 50;
    this.textoPuntos = String(this.acumPuntos8);
    this.textoPuntos = this.textoPuntos + '%';
    console.log(this.textoPuntos);
    return [this.acumPuntos8, this.textoPuntos];
  }
  guardar() {
    console.log(this.cond1);
    if ( this.id === 'nuevo' ) {
      this._CONDICIONSERVICES.nuevoInvocador(this.cond1 ).subscribe(data => {
        this.router.navigate(['/DenominacionDelPrograma', data.name]);
      },
      error => console.error(error));
    } else {
      this._CONDICIONSERVICES.actualizarInvocador( this.cond1, this.id ).subscribe(data => {
        console.log(data);
      },
      error => console.error(error));
    }
  }
  agregarNuevo( forma: NgForm) {
    this.router.navigate(['/DenominacionDelPrograma', 'nuevo']);
    forma.reset({});
  }
  myFunc1(num1) {
    console.log(num1); // here you will get input value through ng-model
    console.log(num1);
    const con = new Date(num1);
    con.setDate(con.getDate() + 1);
    console.log('Convertido', con);
    this.res1 = diferenciaEntreDiasEnDias(con, this.today);
    function diferenciaEntreDiasEnDias(a, b) {
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      return Math.floor((utc1 - utc2) / (1000 * 60 * 60 * 24));
    }
    console.log('Dias', this.res1);
  }
  myFunc2(num2) {
    console.log(num2); // here you will get input value through ng-model
    console.log(num2);
    const con = new Date(num2);
    con.setDate(con.getDate() + 1);
    console.log('Convertido', con);
    this.res2 = diferenciaEntreDiasEnDias(con, this.today);
    function diferenciaEntreDiasEnDias(a, b) {
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

      return Math.floor((utc1 - utc2) / (1000 * 60 * 60 * 24));
    }
    console.log('Dias', this.res2);
  }
  myFunc3(num3) {
    console.log(num3); // here you will get input value through ng-model
    console.log(num3);
    const con = new Date(num3);
    con.setDate(con.getDate() + 1);
    console.log('Convertido', con);
    this.res3 = diferenciaEntreDiasEnDias(con, this.today);
    function diferenciaEntreDiasEnDias(a, b) {
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

      return Math.floor((utc1 - utc2) / (1000 * 60 * 60 * 24));
    }
    console.log('Dias', this.res3);
  }
  ngOnInit() {
    this.headerTitleService.setTitle('DENOMINACIÓN DEL PROGRAMA');
    this.nav.show();
    this.prop.hide();
    this.myFunc1(this.fecha1Id);
    this.myFunc2(this.fecha2Id);
    this.myFunc3(this.fecha3Id);
    // this.nav.doSomethingElseUseful();
  }
  /*openDialog() {
    const dialogRef = this.dialog.open(ModalUnoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }*/
/*
  constructor(
    private modalService: NgbModal
  ) { }
  openFormModal() {
    const modalRef = this.modalService.open(ModalUnoComponent);
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
*/
}
