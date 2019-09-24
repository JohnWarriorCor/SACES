import { Component, OnInit } from '@angular/core';
import { Runner } from 'protractor';
import {formatDate } from '@angular/common';

/*MODAL FUNCIONAL ERROR CIERRA RAPIDO
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalUnoComponent } from './modal-uno.component';
*/
// import { ModalUnoComponent } from './modal-uno.component';
// import {MatDialog} from '@angular/material/dialog';
import { NavbarService } from '../../services/navbar.service';
import { TituloService } from '../../services/titulo.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-condicion-uno',
  templateUrl: './condicion-uno.component.html',
  styleUrls: ['./condicion-uno.component.css']
})
export class CondicionUnoComponent implements OnInit {
  formato = 1000 * 60 * 60 * 24;
  today = new Date();
  res1 = 0;
  res2 = 0;
  res3 = 0;
  res4 = 0;
  resultado = new Date();
  fecha1 = new Date('09/20/2019');
  fecha1Id = 0;
  fecha2Id = 0;
  fecha3Id = 0;
  fecha4Id = 0;
  jstoday = '';
  constructor( public nav: NavbarService, private headerTitleService: TituloService) {
    console.log(this.today);
    console.log(this.fecha1);
    // this.res = diferenciaEntreDiasEnDias(this.fecha1, this.today);
    // console.log(this.res);
    this.jstoday = formatDate(this.today, 'dd/MM/yyyy', 'en-US', '-0500');
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

      return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
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

      return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
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

      return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
    }
    console.log('Dias', this.res3);
  }
  myFunc4(num4) {
    console.log(num4); // here you will get input value through ng-model
    console.log(num4);
    const con = new Date(num4);
    con.setDate(con.getDate() + 1);
    console.log('Convertido', con);
    this.res4 = diferenciaEntreDiasEnDias(con, this.today);
    function diferenciaEntreDiasEnDias(a, b) {
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

      return Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24));
    }
    console.log('Dias', this.res4);
  }
  ngOnInit() {
    this.headerTitleService.setTitle('DENOMINACIÓN DEL PROGRAMA');
    this.nav.show();
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
