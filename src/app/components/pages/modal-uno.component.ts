import { Component, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-uno',
  templateUrl: './modal-uno.component.html',
  styleUrls: ['./modal-uno.component.css'],
})

export class ModalUnoComponent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}
