import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Condicion1Service } from '../../services/condicion1.service';
import { NavbarService } from '../../services/navbar.service';
import { TituloService } from '../../services/titulo.service';
import { formatDate } from '@fullcalendar/core';
import { PropiedadIntelectualService } from '../../services/propiedad-intelectual.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registro-con1',
  templateUrl: './registro-con1.component.html',
  styleUrls: ['./registro-con1.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistroCon1Component implements OnInit {
  closeResult: string;
  acumFechas = 0;
  comodinAcum = 0;
  modalReference: any;
  condiciones1: any[] = [];
  loading = true;
  formato = 1000 * 60 * 60 * 24;
  today = new Date();
  // res1: number[] = [2, 3];
  // res2: any[] = [];
  // res3: any[] = [];
  res1 = 0;
  res2 = 0;
  res3 = 0;
  fecha1Id = 0;
  fecha2Id = 0;
  fecha3Id = 0;
  funcion1 = true;
  funcion2 = true;
  funcion3 = true;
  acumPuntos = 0.0;
  // tslint:disable-next-line:max-line-length
  constructor(private modalService: NgbModal, public prop: PropiedadIntelectualService, private _CONDICIONES1SERVICE: Condicion1Service, public nav: NavbarService, public headerTitleService: TituloService ) {
    this._CONDICIONES1SERVICE.getInvocadores().subscribe( data => {
      setTimeout(() => {
        this.loading = false;
        this.condiciones1 = data;
        console.log(this.condiciones1);
      }, 0);
    });
  }
  openSm(content) {
    this.modalReference = this.modalService.open(content, { size: 'sm', centered: true });
  }
  progreso() {
    this.acumPuntos = this.acumPuntos + 8;
    return this.acumPuntos;
  }
  ngOnInit() {
    this.headerTitleService.setTitle('Registro condición 1');
    this.nav.show();
    this.prop.hide();
    this.progreso();
  }
  hello() {
    console.log('Hola mundo');
  }
  borrarInvocador( key$: string) {
    this._CONDICIONES1SERVICE.borrarInvocador(key$).subscribe( respuesta => {
      if ( respuesta ) {
        console.error(respuesta);
      } else {
        delete this.condiciones1[key$];
        this.modalReference.close();
      }
    });
  }
  myFunc1(num1) {
    // console.log('SI PASA', num1); // here you will get input value through ng-model
    const con = new Date(num1);
    con.setDate(con.getDate() + 1);
    // console.log('Convertido', con);
    // console.log('ACUMULADOR', this.acumFechas);
    this.res1 = diferenciaEntreDiasEnDias(con, this.today);
    this.comodinAcum = this.acumFechas;
    console.log('POSICION', this.acumFechas);
    console.log('RESULTADO PARA FUNC 1', this.res1[this.acumFechas]);
    this.acumFechas = this.acumFechas + 1;
    // return this.res1[this.comodinAcum];
    // console.log('ARRAY', this.res1[this.acumFechas]);
    function diferenciaEntreDiasEnDias(a, b) {
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      // console.log('DESPUES DE LA FUNCION', this.acumFechas);
      return Math.floor((utc1 - utc2) / (1000 * 60 * 60 * 24));
    }
  }
  myFunc2(num2) {
    const con = new Date(num2);
    con.setDate(con.getDate() + 1);
    this.res2 = diferenciaEntreDiasEnDias(con, this.today);
    function diferenciaEntreDiasEnDias(a, b) {
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      return Math.floor((utc1 - utc2) / (1000 * 60 * 60 * 24));
    }
  }
  myFunc3(num3) {
    const con = new Date(num3);
    con.setDate(con.getDate() + 1);
    this.res3 = diferenciaEntreDiasEnDias(con, this.today);
    function diferenciaEntreDiasEnDias(a, b) {
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

      return Math.floor((utc1 - utc2) / (1000 * 60 * 60 * 24));
    }
  }

}
