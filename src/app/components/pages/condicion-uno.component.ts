import { Component, OnInit } from '@angular/core';
import { Runner } from 'protractor';
/*MODAL FUNCIONAL ERROR CIERRA RAPIDO
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalUnoComponent } from './modal-uno.component';
*/
// import { ModalUnoComponent } from './modal-uno.component';
// import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-condicion-uno',
  templateUrl: './condicion-uno.component.html',
  styleUrls: ['./condicion-uno.component.css']
})
export class CondicionUnoComponent {
  constructor(// public dialog: MatDialog
    ) {}

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
