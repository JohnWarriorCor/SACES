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


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'DenominacionDelPrograma', component: CondicionUnoComponent },
  { path: 'JustificacionDelPrograma', component: CondicionDosComponent },
  { path: 'AspectosCurriculares', component: CondicionTresComponent },
  { path: 'AcademicasProcesosFormativos', component: CondicionCuatroComponent },
  { path: 'InvestigacionInnovacion', component: CondicionCincoComponent },
  { path: 'SectorExerno', component: CondicionSeisComponent },
  { path: 'Profesor', component: CondicionSieteComponent },
  { path: 'MediosEducativos', component: CondicionOchoComponent },
  { path: 'InfraestructuraFisicaTecnologica', component: CondicionNueveComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(routes, {useHash: true});
