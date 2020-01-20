import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { CondicionCeroComponent } from './components/pages/0condicion/condicion-cero.component';
import { CondicionCeroViewComponent } from './components/pages/0condicion/condicion-cero-view.component';
import { CondicionUnoComponent } from './components/pages/1condicion/condicion-uno.component';
import { CondicionDosComponent } from './components/pages/2condicion/condicion-dos.component';
import { CondicionTresComponent } from './components/pages/3condicion/condicion-tres.component';
import { CondicionCuatroComponent } from './components/pages/4condicion/condicion-cuatro.component';
import { CondicionCincoComponent } from './components/pages/5condicion/condicion-cinco.component';
import { CondicionSeisComponent } from './components/pages/6condicion/condicion-seis.component';
import { CondicionSieteComponent } from './components/pages/7condicion/condicion-siete.component';
import { CondicionOchoComponent } from './components/pages/8condicion/condicion-ocho.component';
import { CondicionNueveComponent } from './components/pages/9condicion/condicion-nueve.component';
import { CronogramaComponent } from './components/pages/cronograma/cronograma.component';
import { RegistroCon1Component } from './components/pages/1condicion/registro-con1.component';
import { ModalContainerComponent } from './components/pages/modals/tabla2cond7/modal-container.component';
import { ModalContainerTabla1Component } from './components/pages/modals/tabla1cond7/modal-container-tabla1.component';
import { ModalContainerTabla3Component } from './components/pages/modals/tabla3cond7/modal-container-tabla3.component';
import { ModalContainerTabla4Component } from './components/pages/modals/tabla4cond7/modal-container-tabla4.component';
import { ModalContainerTabla5Component } from './components/pages/modals/tabla5cond7/modal-container-tabla5.component';
import { ModalContainerTabla6Component } from './components/pages/modals/tabla6cond7/modal-container-tabla6.component';





const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'HistoriaInstitucionalForm/:id', component: CondicionCeroComponent },
  { path: 'HistoriaInstitucional', component: CondicionCeroViewComponent },
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
