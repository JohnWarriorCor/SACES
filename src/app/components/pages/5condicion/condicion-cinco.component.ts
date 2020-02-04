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
import { Condicion5 } from '../../../interfaces/condicion5';
import { Condicion5Service } from '../../../services/condicion5.service';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-condicion-cinco',
  templateUrl: './condicion-cinco.component.html',
  styleUrls: ['./condicion-cinco.component.css']
})
export class CondicionCincoComponent implements OnInit {
  cond5: Condicion5 = {
    condicion5Aspecto1: '',
    condicion5Aspecto2: '',
    condicion5Aspecto3: '',
    condicion5Aspecto4: '',
    condicion5Aspecto5: '',
    condicion5Aspecto6: '',
    archivoAspecto1: '',
    archivoAspecto2: '',
    archivoAspecto3: '',
    archivoAspecto4: '',
    archivoAspecto5: '',
    archivoAspecto6: '',
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
   // CARGA DE ARCHIVOS A FIRESTORE ASPECTO 4
   public mensajeArchivo4 = 'No hay un archivo seleccionado';
   public datosFormulario4 = new FormData();
   public nombreArchivo4 = '';
   public URLPublica4 = '';
   public porcentaje4 = 0;
   public finalizado4 = false;
   public archivoForm4 = new FormGroup({
     archivo4: new FormControl(null, Validators.required),
   });
    // CARGA DE ARCHIVOS A FIRESTORE ASPECTO 5
  public mensajeArchivo5 = 'No hay un archivo seleccionado';
  public datosFormulario5 = new FormData();
  public nombreArchivo5 = '';
  public URLPublica5 = '';
  public porcentaje5 = 0;
  public finalizado5 = false;
  public archivoForm5 = new FormGroup({
    archivo5: new FormControl(null, Validators.required),
  });
   // CARGA DE ARCHIVOS A FIRESTORE ASPECTO 6
   public mensajeArchivo6 = 'No hay un archivo seleccionado';
   public datosFormulario6 = new FormData();
   public nombreArchivo6 = '';
   public URLPublica6 = '';
   public porcentaje6 = 0;
   public finalizado6 = false;
   public archivoForm6 = new FormGroup({
     archivo6: new FormControl(null, Validators.required),
   });
  constructor(private firebaseStorage: CargarArchivoService, public prop: PropiedadIntelectualService, public foot: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('INVESTIGACIÓN, INNOVACIÓN Y/O CREACIÓN ARTÍSTICA Y CULTURAL');
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
            this.cond5.archivoAspecto1 = this.URLPublica1;
            return [this.URLPublica1, this.finalizado1, this.cond5.archivoAspecto1];
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
            this.cond5.archivoAspecto2 = this.URLPublica2;
            return [this.URLPublica2, this.finalizado2, this.cond5.archivoAspecto2];
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
            this.cond5.archivoAspecto3 = this.URLPublica3;
            return [this.URLPublica3, this.finalizado3, this.cond5.archivoAspecto3];
          });
        }, 5000);
      }
    });
  }
  // ASPECTO 4
  // Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivo4(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo4 = `Archivo: ${event.target.files[i].name}`;
        this.nombreArchivo4 = event.target.files[i].name;
        this.datosFormulario4.delete('archivo4');
        this.datosFormulario4.append('archivo4', event.target.files[i], event.target.files[i].name);
      }
    } else {
      this.mensajeArchivo1 = 'No hay un archivo seleccionado';
    }
  }
  // Sube el archivo a Cloud Storage
  subirArchivo4() {
    const archivo4 = this.datosFormulario4.get('archivo4');
    const referencia4 = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo4);
    const tarea4 = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo4, archivo4);

    // Cambia el porcentaje
    tarea4.percentageChanges().subscribe((porcentaje4) => {
      this.porcentaje4 = Math.round(porcentaje4);
      if (this.porcentaje4 === 100) {
        setTimeout(() => {
          referencia4.getDownloadURL().subscribe((URL) => {
            this.URLPublica4 = URL;
            console.log(this.URLPublica4);
            this.finalizado4 = true;
            this.cond5.archivoAspecto4 = this.URLPublica4;
            return [this.URLPublica4, this.finalizado4, this.cond5.archivoAspecto4];
          });
        }, 5000);
      }
    });
  }
  // ASPECTO 5
  // Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivo5(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo5 = `Archivo: ${event.target.files[i].name}`;
        this.nombreArchivo5 = event.target.files[i].name;
        this.datosFormulario5.delete('archivo5');
        this.datosFormulario5.append('archivo5', event.target.files[i], event.target.files[i].name);
      }
    } else {
      this.mensajeArchivo5 = 'No hay un archivo seleccionado';
    }
  }
  // Sube el archivo a Cloud Storage
  subirArchivo5() {
    const archivo5 = this.datosFormulario5.get('archivo5');
    const referencia5 = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo5);
    const tarea5 = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo5, archivo5);

    // Cambia el porcentaje
    tarea5.percentageChanges().subscribe((porcentaje5) => {
      this.porcentaje2 = Math.round(porcentaje5);
      if (this.porcentaje5 === 100) {
        setTimeout(() => {
          referencia5.getDownloadURL().subscribe((URL) => {
            this.URLPublica5 = URL;
            console.log(this.URLPublica5);
            this.finalizado5 = true;
            this.cond5.archivoAspecto5 = this.URLPublica5;
            return [this.URLPublica5, this.finalizado5, this.cond5.archivoAspecto5];
          });
        }, 5000);
      }
    });
  }
  // ASPECTO 6
  // Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivo6(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo6 = `Archivo: ${event.target.files[i].name}`;
        this.nombreArchivo6 = event.target.files[i].name;
        this.datosFormulario6.delete('archivo6');
        this.datosFormulario6.append('archivo6', event.target.files[i], event.target.files[i].name);
      }
    } else {
      this.mensajeArchivo6 = 'No hay un archivo seleccionado';
    }
  }
  // Sube el archivo a Cloud Storage
  subirArchivo6() {
    const archivo6 = this.datosFormulario6.get('archivo6');
    const referencia6 = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo6);
    const tarea6 = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo6, archivo6);

    // Cambia el porcentaje
    tarea6.percentageChanges().subscribe((porcentaje6) => {
      this.porcentaje6 = Math.round(porcentaje6);
      if (this.porcentaje6 === 100) {
        setTimeout(() => {
          referencia6.getDownloadURL().subscribe((URL) => {
            this.URLPublica6 = URL;
            console.log(this.URLPublica6);
            this.finalizado6 = true;
            this.cond5.archivoAspecto6 = this.URLPublica6;
            return [this.URLPublica6, this.finalizado6, this.cond5.archivoAspecto6];
          });
        }, 5000);
      }
    });
  }
}
