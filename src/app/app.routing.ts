import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { CondicionUnoComponent } from './components/pages/condicion-uno.component';
import { CondicionDosComponent } from './components/pages/condicion-dos.component';
import { CondicionTresComponent } from './components/pages/condicion-tres.component';
import { CondicionCuatroComponent } from './components/pages/condicion-cuatro.component';
import { CondicionCincoComponent } from './components/pages/condicion-cinco.component';
import { CondicionSeisComponent } from './components/pages/condicion-seis.component';
import { CondicionSieteComponent } from './components/pages/condicion-siete.component';
import { CondicionOchoComponent } from './components/pages/condicion-ocho.component';
import { CondicionNueveComponent } from './components/pages/condicion-nueve.component';
import { CronogramaComponent } from './components/pages/cronograma.component';
import { RegistroCon1Component } from './components/pages/registro-con1.component';
import { CondicionCeroComponent } from './components/pages/condicion-cero.component';
import { ModalContainerComponent } from './modal-container.component';
import { ModalContainerTabla1Component } from './modal-container-tabla1.component';
import { ModalContainerTabla3Component } from './modal-container-tabla3.component';
import { ModalContainerTabla4Component } from './modal-container-tabla4.component';
import { ModalContainerTabla5Component } from './modal-container-tabla5.component';
import { ModalContainerTabla6Component } from './modal-container-tabla6.component';




const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'HistoriaInstitucional', component: CondicionCeroComponent },
  { path: 'DenominacionDelPrograma/:id', component: CondicionUnoComponent },
  { path: 'Modal/:id', component: ModalContainerComponent },
  { path: 'ModalTabla1/:id', component: ModalContainerTabla1Component },
  { path: 'ModalTabla3/:id', component: ModalContainerTabla3Component },
  { path: 'ModalTabla4/:id', component: ModalContainerTabla4Component },
  { path: 'ModalTabla5/:id', component: ModalContainerTabla5Component },
  { path: 'ModalTabla6', component: ModalContainerTabla6Component },
  { path: 'Condiciones1', component: RegistroCon1Component },
  { path: 'JustificacionDelPrograma', component: CondicionDosComponent },
  { path: 'AspectosCurriculares', component: CondicionTresComponent },
  { path: 'AcademicasProcesosFormativos', component: CondicionCuatroComponent },
  { path: 'InvestigacionInnovacion', component: CondicionCincoComponent },
  { path: 'SectorExerno', component: CondicionSeisComponent },
  { path: 'Profesor', component: CondicionSieteComponent },
  { path: 'MediosEducativos', component: CondicionOchoComponent },
  { path: 'InfraestructuraFisicaTecnologica', component: CondicionNueveComponent },
  { path: 'Cronograma', component: CronogramaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash: true});
