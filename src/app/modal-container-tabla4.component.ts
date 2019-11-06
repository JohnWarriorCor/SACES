import { Component, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FormGroup, NgForm, FormControl, Validators, FormArray } from '@angular/forms';
import { FuncionesCompartidasService } from './services/funciones-compartidas.service';
import { FormTabla4Condicion7Component } from './components/pages/modals/form-tabla4-condicion7.component';
import { Tabla4Condicion7Service } from './services/tabla4-condicion7.service';
import { Tabla4Condicion7 } from './interfaces/tabla4-condicion7';

@Component({
  selector: 'app-modal-container-tabla4',
  templateUrl: './modal-container.component.html',
})
export class ModalContainerTabla4Component implements OnDestroy {

  destroy = new Subject<any>();
  currentDialog = null;
  forma: FormGroup;
  controls: any;
  nuevo = false;
  id: string;
  tabla4cond7: Tabla4Condicion7 = {
    anio: '',
    periodo: '',
    estudiantesIns: '',
    graduados: '',
    egresados: '',
    tasaDesSpa: '',
    tasaDes: '',
  };
  // tslint:disable-next-line:max-line-length
  constructor(private sharedService: FuncionesCompartidasService, private _CONDICIONSERVICES: Tabla4Condicion7Service, private modalService: NgbModal, private route: ActivatedRoute, private router: Router) {
    console.log('A VER QUE SALE', this.id);
    this.route.params.subscribe( parametros => {
      this.id = parametros.id;
      this.sharedService.componentOneFn1 = parametros.id;
      console.log('Los supuestos parametros', parametros.id);
      console.log('SI PASÓ POR ACÁ');
      console.log(this.id);
      if ( this.id !== 'nuevo' ) {
        this._CONDICIONSERVICES.getInvocador( this.id ).subscribe(tabla4cond7 => this.tabla4cond7 = tabla4cond7);
      }
    });
    this.route.params.pipe(takeUntil(this.destroy)).subscribe(params => {
      // When router navigates on this component is takes the params and opens up the photo detail modal
      this.currentDialog = this.modalService.open(FormTabla4Condicion7Component, {centered: true});
      this.currentDialog.componentInstance.photo = params.id;

      // Go back to home page after the modal is closed
      this.currentDialog.result.then(result => {
          this.router.navigateByUrl('/Profesor');
      }, reason => {
        this.router.navigateByUrl('/Profesor');
      });
  });
  }
  guardar() {
    console.log(this.tabla4cond7);
    if ( this.id === 'nuevo' ) {
      this._CONDICIONSERVICES.nuevoInvocador(this.tabla4cond7 ).subscribe(data => {
        this.router.navigate(['/ModalTabla4', data.name]);
      },
      error => console.error(error));
    } else {
      this._CONDICIONSERVICES.actualizarInvocador( this.tabla4cond7, this.id ).subscribe(data => {
        console.log(data);
      },
      error => console.error(error));
    }
  }
  open() {
    const modalRef = this.modalService.open(FormTabla4Condicion7Component);
    modalRef.componentInstance.name = 'World';
  }
  agregarNuevo( forma: NgForm) {
    this.router.navigate(['/ModalTabla4', 'nuevo']);
    forma.reset({});
  }
  ngOnDestroy() {
    this.destroy.next();
  }

}
