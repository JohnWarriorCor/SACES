import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../services/titulo.service';
import { NavbarService } from '../../services/navbar.service';
@Component({
  selector: 'app-condicion-cuatro',
  templateUrl: './condicion-cuatro.component.html',
  styleUrls: ['./condicion-cuatro.component.css']
})
export class CondicionCuatroComponent implements OnInit {

  constructor(private headerTitleService: TituloService, public nav: NavbarService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('ORGANIZACIÓN ACTIVIDADES ACADÉMICAS Y PROCESO FORMATIVO');
    this.nav.show();
  }

}
