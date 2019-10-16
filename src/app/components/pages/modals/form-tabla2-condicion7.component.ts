import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form-tabla2-condicion7',
  templateUrl: './form-tabla2-condicion7.component.html',
  styleUrls: ['./form-tabla2-condicion7.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class FormTabla2Condicion7Component {

  @Input() name;

  constructor(config: NgbModalConfig, private modalService: NgbModal, public activeModal: NgbActiveModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
}
