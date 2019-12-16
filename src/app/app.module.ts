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
import { CondicionUnoComponent } from './components/pages/condicion-uno.component';
import { CondicionDosComponent } from './components/pages/condicion-dos.component';
import { CondicionTresComponent } from './components/pages/condicion-tres.component';
import { CondicionCuatroComponent } from './components/pages/condicion-cuatro.component';
import { CondicionCincoComponent } from './components/pages/condicion-cinco.component';
import { CondicionSeisComponent } from './components/pages/condicion-seis.component';
import { CondicionSieteComponent } from './components/pages/condicion-siete.component';
import { CondicionOchoComponent } from './components/pages/condicion-ocho.component';
import { CondicionNueveComponent } from './components/pages/condicion-nueve.component';
import { ModalUnoComponent } from './components/pages/modal-uno.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { NavbarService } from './services/navbar.service';
import { CronogramaComponent } from './components/pages/cronograma.component';
import { RegistroCon1Component } from './components/pages/registro-con1.component';
import { KeysPipe } from './pipes/keys.pipe';
import { Condicion1Service } from './services/condicion1.service';
import { TituloService } from './services/titulo.service';
import { PropiedadIntelectualComponent } from './components/shared/footer/propiedad-intelectual.component';
import { CondicionCeroComponent } from './components/pages/condicion-cero.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormTabla2Condicion7Component } from './components/pages/modals/form-tabla2-condicion7.component';
import { ModalContainerComponent } from './modal-container.component';
import { NgInitDirective } from './components/ng-init.directive';
import { ModalContainerTabla1Component } from './modal-container-tabla1.component';
import { FormTabla1Condicion7Component } from './components/pages/modals/form-tabla1-condicion7.component';
import { ModalContainerTabla3Component } from './modal-container-tabla3.component';
import { ModalContainerTabla4Component } from './modal-container-tabla4.component';
import { ModalContainerTabla5Component } from './modal-container-tabla5.component';
import { ModalContainerTabla6Component } from './modal-container-tabla6.component';
import { FormTabla3Condicion7Component } from './components/pages/modals/form-tabla3-condicion7.component';
import { FormTabla4Condicion7Component } from './components/pages/modals/form-tabla4-condicion7.component';
import { FormTabla5Condicion7Component } from './components/pages/modals/form-tabla5-condicion7.component';
import { FormTabla6Condicion7Component } from './components/pages/modals/form-tabla6-condicion7.component';
// Firebase
import { CargaImagenesService } from './services/carga-imagenes.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
import { CondicionCeroViewComponent } from './components/pages/condicion-cero-view.component';
// import { NgDropFilesDirective } from './directives/ng-drop-files.directive';
// Imprimir
import {NgxPrintModule} from 'ngx-print';

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
    CondicionCeroViewComponent
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
    AngularFireStorageModule // imports firebase/storage only needed for storage features
    // NgbModule,
    // MatDialogModule
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
