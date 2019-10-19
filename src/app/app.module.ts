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
  ],
  imports: [
    NgbModule,
    FullCalendarModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    APP_ROUTING,
    // NgbModule,
    // MatDialogModule
  ],
  exports: [
    // MatDialogModule
  ],
  providers: [
    NavbarService,
    Condicion1Service,
    TituloService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    ModalUnoComponent,
    FormTabla2Condicion7Component
  ]
})
export class AppModule { }
