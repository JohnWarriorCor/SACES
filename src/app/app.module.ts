import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// MODULOS DE CRONOGRAMA
import { FullCalendarModule } from '@fullcalendar/angular';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MatDialogModule } from '@angular/material/dialog';
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
  ],
  imports: [
    FullCalendarModule,
    FormsModule,
    BrowserModule,
    APP_ROUTING,
    // NgbModule,
    // MatDialogModule
  ],
  exports: [
    // MatDialogModule
  ],
  providers: [
    NavbarService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalUnoComponent]
})
export class AppModule { }
