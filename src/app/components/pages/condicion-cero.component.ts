import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { TituloService } from '../../services/titulo.service';
import { PropiedadIntelectualService } from '../../services/propiedad-intelectual.service';
import { formatDate } from '@angular/common';
import { Router, ActivatedRoute} from '@angular/router';

import { FormGroup, NgForm, FormControl, Validators, FormArray } from '@angular/forms';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalUnoComponent } from './modal-uno.component';
import { HistoriaInstService } from '../../services/historia-inst.service';
import { HistoriaInst } from '../../interfaces/historia-inst';

@Component({
  selector: 'app-condicion-cero',
  templateUrl: './condicion-cero.component.html',
  styleUrls: ['./condicion-cero.component.css']
})
export class CondicionCeroComponent implements OnInit {

  forma: FormGroup;
  controls: any;
  nuevo = false;
  id: string;
  historia: HistoriaInst = {
    reseniaHist: '',
    mision: '',
    vision: '',
    objetivos: '',
  };

  // tslint:disable-next-line:max-line-length
  constructor(public prop: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService, private modalService: NgbModal, config: NgbProgressbarConfig, private _CONDICIONSERVICES: HistoriaInstService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe( parametros => {
      this.id = parametros.id;
      console.log('Los supuestos parametros', parametros.id);
      console.log('SI PASÓ POR ACÁ');
      console.log(this.id);
      if ( this.id !== 'nuevo' ) {
        this._CONDICIONSERVICES.getHistoria( this.id ).subscribe(historia => this.historia = historia);
      }
    });
  }

  ngOnInit() {
    this.headerTitleService.setTitle('HISTORIA INSTITUCIONAL Y DE PROGRAMA');
    this.nav.show();
    this.prop.hide();
  }

  guardar() {
    console.log(this.historia);
    if ( this.id === 'nuevo' ) {
      this._CONDICIONSERVICES.nuevoHistoria( this.historia ).subscribe(data => {
        this.router.navigate(['/HistoriaInstitucional']);
      },
      error => console.error(error));
    } else {
      this._CONDICIONSERVICES.actualizarHistoria( this.historia, this.id ).subscribe(data => {
        console.log(data);
        this.router.navigate(['/HistoriaInstitucional']);
      },
      error => console.error(error));
    }
  }
  agregarNuevo( forma: NgForm) {
    this.router.navigate(['/HistoriaInstitucionalForm', 'nuevo']);
    forma.reset({});
  }
}
