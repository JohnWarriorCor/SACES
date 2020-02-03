import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
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
import { NavbarService } from '../../../services/navbar.service';
import { TituloService } from '../../../services/titulo.service';
import { FormGroup, NgForm, FormControl, Validators, FormArray } from '@angular/forms';
import { Condicion1 } from '../../../interfaces/condicion1.interface';
import { Condicion1Service } from '../../../services/condicion1.service';
import { PropiedadIntelectualService } from '../../../services/propiedad-intelectual.service';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-condicion-uno',
  templateUrl: './condicion-uno.component.html',
  styleUrls: ['./condicion-uno.component.css'],
  providers: [NgbProgressbarConfig],
  encapsulation: ViewEncapsulation.None,
})
export class CondicionUnoComponent implements OnInit {
  // BOTON ASPECTOS - PREGUNTAS
  show = false;
  buttonName = 'Aspectos';
  // MODAL
  closeResult: string;
  // BARRA DE PROGRESO
  acumPuntos = 0.0;
  acumPuntos1 = 0.0;
  acumPuntos2 = 0.0;
  acumPuntos3 = 0.0;
  acumPuntos4 = 0.0;
  acumPuntos5 = 0.0;
  acumPuntos6 = 0.0;
  acumPuntos7 = 0.0;
  acumPuntos8 = 0.0;
  textoPuntos = '';
  // CONEXION FIREBASE BD
  forma: FormGroup;
  controls: any;
  nuevo = false;
  id: string;
  cond1: Condicion1 = {
    tipoprograma: '',
    por1: 0,
    nombreprograma: '',
    respnombre: '',
    datenombre: '',
    titulo: '',
    resptitulo: '',
    datetitulo: '',
    contenidoCurricular: '',
    respcontenido: '',
    datecontenido: '',
    observa: '',
    pregunta11: '',
    pregunta21: '',
    pregunta31: '',
    pregunta41: '',
    archivoAspecto1: '',
    archivoAspecto2: '',
    archivoAspecto3: '',
    archivoAspecto4: '',
  };
  // FECHA
  formato = 1000 * 60 * 60 * 24;
  today = new Date();
  res1 = -10000;
  res2 = -10000;
  res3 = -10000;
  resultado = new Date();
  fecha1 = new Date('09/20/2019');
  fecha1Id = 0;
  fecha2Id = 0;
  fecha3Id = 0;
  jstoday = '';
  // CARGA DE ARCHIVOS A FIRESTORE CONTENIDO CURRICULAR
  public mensajeArchivo = 'No hay un archivo';
  public datosFormulario = new FormData();
  public nombreArchivo = '';
  public URLPublica = '';
  public porcentaje = 0;
  public finalizado = false;
  public archivoForm = new FormGroup({
    archivo: new FormControl(null, Validators.required),
  });
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
  // tslint:disable-next-line:max-line-length
  constructor(private firebaseStorage: CargarArchivoService, private modalService: NgbModal, config: NgbProgressbarConfig, public prop: PropiedadIntelectualService, public foot: PropiedadIntelectualService, public nav: NavbarService, private headerTitleService: TituloService, private _CONDICIONSERVICES: Condicion1Service, private router: Router, private activatedRoute: ActivatedRoute) {
    config.striped = true;
    config.animated = true;
    this.jstoday = formatDate(this.today, 'dd/MM/yyyy', 'en-US', '-0500');
    this.activatedRoute.params.subscribe( parametros => {
      this.id = parametros.id;
      if ( this.id !== 'nuevo' ) {
        this._CONDICIONSERVICES.getInvocador( this.id ).subscribe(cond1 => this.cond1 = cond1);
      }
    });
  }
  ngOnInit() {
    this.myFunc1(this.fecha1Id);
    this.myFunc2(this.fecha2Id);
    this.myFunc3(this.fecha3Id);
    this.headerTitleService.setTitle('DENOMINACIÓN DEL PROGRAMA');
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
  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  progreso1() {
    this.cond1.por1 = 100;
    this.acumPuntos1 = this.acumPuntos1 + 100;
    this.textoPuntos = String(this.acumPuntos1);
    this.textoPuntos = this.textoPuntos + '%';
    return [this.acumPuntos1, this.textoPuntos];
  }
  progreso() {
    this.acumPuntos = this.acumPuntos + 8;
    this.textoPuntos = String(this.acumPuntos);
    this.textoPuntos = this.textoPuntos + '%';
    return [this.acumPuntos, this.textoPuntos];
  }
  progreso2() {
    this.acumPuntos2 = this.acumPuntos2 + 34;
    this.textoPuntos = String(this.acumPuntos2);
    this.textoPuntos = this.textoPuntos + '%';
    return [this.acumPuntos2, this.textoPuntos];
  }
  progreso3() {
    this.acumPuntos3 = this.acumPuntos3 + 34;
    this.textoPuntos = String(this.acumPuntos3);
    this.textoPuntos = this.textoPuntos + '%';
    return [this.acumPuntos3, this.textoPuntos];
  }
  progreso4() {
    this.acumPuntos4 = this.acumPuntos4 + 34;
    this.textoPuntos = String(this.acumPuntos4);
    this.textoPuntos = this.textoPuntos + '%';
    return [this.acumPuntos4, this.textoPuntos];
  }
  progreso5() {
    this.acumPuntos5 = this.acumPuntos5 + 50;
    this.textoPuntos = String(this.acumPuntos5);
    this.textoPuntos = this.textoPuntos + '%';
    return [this.acumPuntos5, this.textoPuntos];
  }
  progreso6() {
    this.acumPuntos6 = this.acumPuntos6 + 50;
    this.textoPuntos = String(this.acumPuntos6);
    this.textoPuntos = this.textoPuntos + '%';
    return [this.acumPuntos6, this.textoPuntos];
  }
  progreso7() {
    this.acumPuntos7 = this.acumPuntos7 + 50;
    this.textoPuntos = String(this.acumPuntos7);
    this.textoPuntos = this.textoPuntos + '%';
    return [this.acumPuntos7, this.textoPuntos];
  }
  progreso8() {
    this.acumPuntos8 = this.acumPuntos8 + 50;
    this.textoPuntos = String(this.acumPuntos8);
    this.textoPuntos = this.textoPuntos + '%';
    return [this.acumPuntos8, this.textoPuntos];
  }
  guardar() {
    if ( this.id === 'nuevo' ) {
      this._CONDICIONSERVICES.nuevoInvocador(this.cond1 ).subscribe(data => {
        this.router.navigate(['/DenominacionDelPrograma', data.name]);
      },
      error => console.error(error));
    } else {
      this._CONDICIONSERVICES.actualizarInvocador( this.cond1, this.id ).subscribe(data => {
        console.log(data);
      },
      error => console.error(error));
    }
  }
  agregarNuevo( forma: NgForm) {
    this.router.navigate(['/DenominacionDelPrograma', 'nuevo']);
    forma.reset({});
  }
  myFunc1(num1) {
    const con = new Date(num1);
    con.setDate(con.getDate() + 1);
    this.res1 = diferenciaEntreDiasEnDias(con, this.today);
    function diferenciaEntreDiasEnDias(a, b) {
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      return Math.floor((utc1 - utc2) / (1000 * 60 * 60 * 24));
    }
  }
  myFunc2(num2) {
    const con = new Date(num2);
    con.setDate(con.getDate() + 1);
    this.res2 = diferenciaEntreDiasEnDias(con, this.today);
    function diferenciaEntreDiasEnDias(a, b) {
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      return Math.floor((utc1 - utc2) / (1000 * 60 * 60 * 24));
    }
  }
  myFunc3(num3) {
    const con = new Date(num3);
    con.setDate(con.getDate() + 1);
    this.res3 = diferenciaEntreDiasEnDias(con, this.today);
    function diferenciaEntreDiasEnDias(a, b) {
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
      return Math.floor((utc1 - utc2) / (1000 * 60 * 60 * 24));
    }
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }
  // Contenido Curricular
  // Evento que se gatilla cuando el input de tipo archivo cambia
  public cambioArchivo(event) {
    if (event.target.files.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < event.target.files.length; i++) {
        this.mensajeArchivo = `${event.target.files[i].name}`;
        this.nombreArchivo = event.target.files[i].name;
        this.datosFormulario.delete('archivo');
        this.datosFormulario.append('archivo', event.target.files[i], event.target.files[i].name);
      }
    } else {
      this.mensajeArchivo = 'No hay un archivo';
    }
  }
  // Sube el archivo a Cloud Storage
  subirArchivo() {
    const archivo = this.datosFormulario.get('archivo');
    const referencia = this.firebaseStorage.referenciaCloudStorage(this.nombreArchivo);
    const tarea = this.firebaseStorage.tareaCloudStorage(this.nombreArchivo, archivo);

    // Cambia el porcentaje
    tarea.percentageChanges().subscribe((porcentaje) => {
      this.porcentaje = Math.round(porcentaje);
      if (this.porcentaje === 100) {
        setTimeout(() => {
          referencia.getDownloadURL().subscribe((URL) => {
            this.URLPublica = URL;
            console.log(this.URLPublica);
            this.finalizado = true;
            this.cond1.contenidoCurricular = this.URLPublica;
            return [this.URLPublica, this.finalizado, this.cond1.contenidoCurricular];
          });
        }, 5000);
      }
    });
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
            this.cond1.archivoAspecto1 = this.URLPublica1;
            return [this.URLPublica1, this.finalizado1, this.cond1.archivoAspecto1];
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
            this.cond1.archivoAspecto2 = this.URLPublica2;
            return [this.URLPublica2, this.finalizado2, this.cond1.archivoAspecto2];
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
            this.cond1.archivoAspecto3 = this.URLPublica3;
            return [this.URLPublica3, this.finalizado3, this.cond1.archivoAspecto3];
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
      this.mensajeArchivo4 = 'No hay un archivo seleccionado';
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
            this.cond1.archivoAspecto4 = this.URLPublica4;
            return [this.URLPublica4, this.finalizado4, this.cond1.archivoAspecto4];
          });
        }, 5000);
      }
    });
  }
}
