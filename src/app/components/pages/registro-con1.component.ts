import { Component, OnInit, Input } from '@angular/core';
import { Condicion1Service } from '../../services/condicion1.service';
import { NavbarService } from '../../services/navbar.service';
import { TituloService } from '../../services/titulo.service';
import { formatDate } from '@fullcalendar/core';
import { PropiedadIntelectualService } from '../../services/propiedad-intelectual.service';

@Component({
  selector: 'app-registro-con1',
  templateUrl: './registro-con1.component.html',
  styleUrls: ['./registro-con1.component.css']
})
export class RegistroCon1Component implements OnInit {
  condiciones1: any[] = [];
  loading = true;
  formato = 1000 * 60 * 60 * 24;
  today = new Date();
  res1 = -10000;
  res2 = -10000;
  res3 = -10000;
  fecha1Id = 0;
  fecha2Id = 0;
  fecha3Id = 0;
  funcion1 = true;
  funcion2 = true;
  funcion3 = true;
  // tslint:disable-next-line:max-line-length
  constructor(public prop: PropiedadIntelectualService, private _CONDICIONES1SERVICE: Condicion1Service, public nav: NavbarService, public headerTitleService: TituloService ) {
    this._CONDICIONES1SERVICE.getInvocadores().subscribe( data => {
      setTimeout(() => {
        this.loading = false;
        this.condiciones1 = data;
      }, 0);
    });
  }
  ngOnInit() {
    this.headerTitleService.setTitle('Registro condición 1');
    this.nav.show();
    this.prop.hide();
    this.myFunc1(this.condiciones1);
  }
  borrarInvocador( key$: string) {
    this._CONDICIONES1SERVICE.borrarInvocador(key$).subscribe( respuesta => {
      if ( respuesta ) {
        console.error(respuesta);
      } else {
        delete this.condiciones1[key$];
      }
    });
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

}
