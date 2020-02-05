import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// MODULOS DE CRONOGRAMA
import { FullCalendarModule } from '@fullcalendar/angular';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MatDialogModule } from '@angular/material/dialog';
// MODULOS REGISTRO FIREBASE
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
// MODULOS REGISTRO FIREBASE
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { APP_ROUTING } from './app.routing';
import { CondicionCeroViewComponent } from './components/pages/0condicion/condicion-cero-view.component';
import { CondicionCeroComponent } from './components/pages/0condicion/condicion-cero.component';
import { CondicionUnoComponent } from './components/pages/1condicion/condicion-uno.component';
import { CondicionDosComponent } from './components/pages/2condicion/condicion-dos.component';
import { CondicionTresComponent } from './components/pages/3condicion/condicion-tres.component';
import { CondicionCuatroComponent } from './components/pages/4condicion/condicion-cuatro.component';
import { CondicionCincoComponent } from './components/pages/5condicion/condicion-cinco.component';
import { CondicionSeisComponent } from './components/pages/6condicion/condicion-seis.component';
import { CondicionSieteComponent } from './components/pages/7condicion/condicion-siete.component';
import { CondicionOchoComponent } from './components/pages/8condicion/condicion-ocho.component';
import { CondicionNueveComponent } from './components/pages/9condicion/condicion-nueve.component';
import { ModalUnoComponent } from './components/pages/modals/modal-uno.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NavbarService } from './services/navbar.service';
import { CronogramaComponent } from './components/pages/cronograma/cronograma.component';
import { RegistroCon1Component } from './components/pages/1condicion/registro-con1.component';
import { KeysPipe } from './pipes/keys.pipe';
import { Condicion1Service } from './services/condicion1.service';
import { TituloService } from './services/titulo.service';
import { PropiedadIntelectualComponent } from './components/shared/footer/propiedad-intelectual.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgInitDirective } from './components/ng-init.directive';
import { ModalContainerTabla1Component } from './components/pages/modals/tabla1cond7/modal-container-tabla1.component';
import { ModalContainerComponent } from './components/pages/modals/tabla2cond7/modal-container.component';
import { ModalContainerTabla3Component } from './components/pages/modals/tabla3cond7/modal-container-tabla3.component';
import { ModalContainerTabla4Component } from './components/pages/modals/tabla4cond7/modal-container-tabla4.component';
import { ModalContainerTabla5Component } from './components/pages/modals/tabla5cond7/modal-container-tabla5.component';
import { ModalContainerTabla6Component } from './components/pages/modals/tabla6cond7/modal-container-tabla6.component';
import { FormTabla1Condicion7Component } from './components/pages/modals/tabla1cond7/form-tabla1-condicion7.component';
import { FormTabla2Condicion7Component } from './components/pages/modals/tabla2cond7/form-tabla2-condicion7.component';
import { FormTabla3Condicion7Component } from './components/pages/modals/tabla3cond7/form-tabla3-condicion7.component';
import { FormTabla4Condicion7Component } from './components/pages/modals/tabla4cond7/form-tabla4-condicion7.component';
import { FormTabla5Condicion7Component } from './components/pages/modals/tabla5cond7/form-tabla5-condicion7.component';
import { FormTabla6Condicion7Component } from './components/pages/modals/tabla6cond7/form-tabla6-condicion7.component';
// Firebase
import { CargaImagenesService } from './services/carga-imagenes.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
// import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
// Imprimir
import {NgxPrintModule} from 'ngx-print';
import { LoginComponent } from './components/pages/login/login.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SortPipe } from './pipes/sort.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { BitacoraComponent } from './components/pages/bitacora/bitacora.component';
import { RegistroCon2Component } from './components/pages/2condicion/registro-con2.component';
import { RegistroCon3Component } from './components/pages/3condicion/registro-con3.component';
import { RegistroCon4Component } from './components/pages/4condicion/registro-con4.component';
import { RegistroCon5Component } from './components/pages/5condicion/registro-con5.component';
import { RegistroCon6Component } from './components/pages/6condicion/registro-con6.component';
import { RegistroCon7Component } from './components/pages/7condicion/registro-con7.component';
import { RegistroCon8Component } from './components/pages/8condicion/registro-con8.component';
import { RegistroCon9Component } from './components/pages/9condicion/registro-con9.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    CondicionUnoComponent,
    CondicionDosComponent,
    CondicionTresComponent,
    CondicionCuatroComponent,
    CondicionCincoComponent,
    CondicionSeisComponent,
    CondicionSieteComponent,
    CondicionOchoComponent,
    CondicionNueveComponent,
    ModalUnoComponent,
    NavbarComponent,
    CronogramaComponent,
    RegistroCon1Component,
    KeysPipe,
    PropiedadIntelectualComponent,
    CondicionCeroComponent,
    FormTabla2Condicion7Component,
    ModalContainerComponent,
    NgInitDirective,
    ModalContainerTabla1Component,
    FormTabla1Condicion7Component,
    ModalContainerTabla3Component,
    ModalContainerTabla4Component,
    ModalContainerTabla5Component,
    ModalContainerTabla6Component,
    FormTabla3Condicion7Component,
    FormTabla4Condicion7Component,
    FormTabla5Condicion7Component,
    FormTabla6Condicion7Component,
    NgDropFilesDirective,
    CondicionCeroViewComponent,
    LoginComponent,
    SortPipe,
    BitacoraComponent,
    RegistroCon2Component,
    RegistroCon3Component,
    RegistroCon4Component,
    RegistroCon5Component,
    RegistroCon6Component,
    RegistroCon7Component,
    RegistroCon8Component,
    RegistroCon9Component,
  ],
  imports: [
    NgxPrintModule,
    NgbModule,
    FullCalendarModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    APP_ROUTING,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    // NgbModule,
    // MatDialogModule
    MDBBootstrapModule.forRoot(),
    OrderModule
  ],
  exports: [
    // MatDialogModule
  ],
  providers: [
    NavbarService,
    Condicion1Service,
    TituloService,
    CargaImagenesService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalUnoComponent,
    FormTabla2Condicion7Component,
    FormTabla1Condicion7Component,
    FormTabla3Condicion7Component,
    FormTabla4Condicion7Component,
    FormTabla5Condicion7Component,
    FormTabla6Condicion7Component
  ]
})
export class AppModule { }
