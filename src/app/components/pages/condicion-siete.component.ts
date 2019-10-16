import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TituloService } from '../../services/titulo.service';
import { NavbarService } from '../../services/navbar.service';
import { PropiedadIntelectualService } from '../../services/propiedad-intelectual.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormTabla2Condicion7Component } from './modals/form-tabla2-condicion7.component';
import { ModalUnoComponent } from './modal-uno.component';

@Component({
  selector: 'app-condicion-siete',
  templateUrl: './condicion-siete.component.html',
  styleUrls: ['./condicion-siete.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CondicionSieteComponent implements OnInit {
  closeResult: string;
  // tslint:disable-next-line:max-line-length
  constructor(private modalService: NgbModal, public prop: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('PROFESORES');
    this.nav.show();
    this.prop.hide();
  }
  openSm(content) {
    this.modalService.open(content, { size: 'sm' });
  }
  open() {
    const modalRef = this.modalService.open(FormTabla2Condicion7Component);
    modalRef.componentInstance.name = 'World';
  }

}
