import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../../services/titulo.service';
import { NavbarService } from '../../../services/navbar.service';
import { PropiedadIntelectualService } from '../../../services/propiedad-intelectual.service';
import { formatDate } from '@angular/common';
import { Router, ActivatedRoute} from '@angular/router';
/*MODAL FUNCIONAL ERROR CIERRA RAPIDO
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CargarArchivoService } from '../../../services/cargar-archivo.service';
import { ModalUnoComponent } from './modal-uno.component';
*/
// import { ModalUnoComponent } from './modal-uno.component';
// import {MatDialog} from '@angular/material/dialog';
import { CargarArchivoService } from '../../../services/cargar-archivo.service';
import { FormGroup, NgForm, FormControl, Validators, FormArray } from '@angular/forms';
import { Condicion2 } from '../../../interfaces/condicion2';
import { Condicion2Service } from '../../../services/condicion2.service';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-condicion-dos',
  templateUrl: './condicion-dos.component.html',
  styleUrls: ['./condicion-dos.component.css']
})
export class CondicionDosComponent implements OnInit {
  cond2: Condicion2 = {
    condicion2Aspecto1: '',
    condicion2Aspecto2: '',
    condicion2Aspecto3: '',
    archivoAspecto1: '',
    archivoAspecto2: '',
    archivoAspecto3: '',
  };
  // BOTON ASPECTOS - PREGUNTAS
  show = false;
  buttonName = 'Aspectos';
  // CARGA DE ARCHIVOS A FIRESTORE ASPECTO 1
  public mensajeArchivo1 = 'No hay un archivo seleccionado';
  public datosFormulario1 = new FormData();
  public nombreArchivo1 = '';
  public URLPublica1 = '';
  public porcentaje1 = 0;
  public finalizado1 = false;
  public archivoForm1 = new FormGroup({
    archivo1: new FormControl(null, Validators.required),
  });
  // CARGA DE ARCHIVOS A FIRESTORE ASPECTO 2
  public mensajeArchivo2 = 'No hay un archivo seleccionado';
  public datosFormulario2 = new FormData();
  public nombreArchivo2 = '';
  public URLPublica2 = '';
  public porcentaje2 = 0;
  public finalizado2 = false;
  public archivoForm2 = new FormGroup({
    archivo2: new FormControl(null, Validators.required),
  });
  // CARGA DE ARCHIVOS A FIRESTORE ASPECTO 3
  public mensajeArchivo3 = 'No hay un archivo seleccionado';
  public datosFormulario3 = new FormData();
  public nombreArchivo3 = '';
  public URLPublica3 = '';
  public porcentaje3 = 0;
  public finalizado3 = false;
  public archivoForm3 = new FormGroup({
    archivo3: new FormControl(null, Validators.required),
  });
  // tslint:disable-next-line:max-line-length
  constructor(private firebaseStorage: CargarArchivoService, public prop: PropiedadIntelectualService, public foot: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('JUSTIFICACIÓN DEL PROGRAMA');
    this.nav.show();
    this.prop.hidePropiedad();
    this.foot.showFooter();
  }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) {
      this.buttonName = 'Preguntas';
    } else {
      this.buttonName = 'Aspectos';
    }
  }
  // ASPECTO 1
  // Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivo1(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo1 = `Archivo: ${event.target.files[i].name}`;
        this.nombreArchivo1 = event.target.files[i].name;
        this.datosFormulario1.delete('archivo1');
        this.datosFormulario1.append('archivo1', event.target.files[i], event.target.files[i].name);
      }
    } else {
      this.mensajeArchivo1 = 'No hay un archivo seleccionado';
    }
  }
  // Sube el archivo a Cloud Storage
  subirArchivo1() {
    const archivo1 = this.datosFormulario1.get('archivo1');
    const referencia1 = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo1);
    const tarea1 = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo1, archivo1);

    // Cambia el porcentaje
    tarea1.percentageChanges().subscribe((porcentaje1) => {
      this.porcentaje1 = Math.round(porcentaje1);
      if (this.porcentaje1 === 100) {
        setTimeout(() => {
          referencia1.getDownloadURL().subscribe((URL) => {
            this.URLPublica1 = URL;
            console.log(this.URLPublica1);
            this.finalizado1 = true;
            this.cond2.archivoAspecto1 = this.URLPublica1;
            return [this.URLPublica1, this.finalizado1, this.cond2.archivoAspecto1];
          });
        }, 5000);
      }
    });
  }
  // ASPECTO 2
  // Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivo2(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo2 = `Archivo: ${event.target.files[i].name}`;
        this.nombreArchivo2 = event.target.files[i].name;
        this.datosFormulario2.delete('archivo2');
        this.datosFormulario2.append('archivo2', event.target.files[i], event.target.files[i].name);
      }
    } else {
      this.mensajeArchivo2 = 'No hay un archivo seleccionado';
    }
  }
  // Sube el archivo a Cloud Storage
  subirArchivo2() {
    const archivo2 = this.datosFormulario2.get('archivo2');
    const referencia2 = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo2);
    const tarea2 = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo2, archivo2);

    // Cambia el porcentaje
    tarea2.percentageChanges().subscribe((porcentaje2) => {
      this.porcentaje2 = Math.round(porcentaje2);
      if (this.porcentaje2 === 100) {
        setTimeout(() => {
          referencia2.getDownloadURL().subscribe((URL) => {
            this.URLPublica2 = URL;
            console.log(this.URLPublica2);
            this.finalizado2 = true;
            this.cond2.archivoAspecto2 = this.URLPublica2;
            return [this.URLPublica2, this.finalizado2, this.cond2.archivoAspecto2];
          });
        }, 5000);
      }
    });
  }
  // ASPECTO 3
  // Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivo3(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo3 = `Archivo: ${event.target.files[i].name}`;
        this.nombreArchivo3 = event.target.files[i].name;
        this.datosFormulario3.delete('archivo3');
        this.datosFormulario3.append('archivo3', event.target.files[i], event.target.files[i].name);
      }
    } else {
      this.mensajeArchivo3 = 'No hay un archivo seleccionado';
    }
  }
  // Sube el archivo a Cloud Storage
  subirArchivo3() {
    const archivo3 = this.datosFormulario3.get('archivo3');
    const referencia3 = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo3);
    const tarea3 = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo3, archivo3);

    // Cambia el porcentaje
    tarea3.percentageChanges().subscribe((porcentaje3) => {
      this.porcentaje3 = Math.round(porcentaje3);
      if (this.porcentaje3 === 100) {
        setTimeout(() => {
          referencia3.getDownloadURL().subscribe((URL) => {
            this.URLPublica3 = URL;
            console.log(this.URLPublica3);
            this.finalizado3 = true;
            this.cond2.archivoAspecto3 = this.URLPublica3;
            return [this.URLPublica3, this.finalizado3, this.cond2.archivoAspecto3];
          });
        }, 5000);
      }
    });
  }
}
