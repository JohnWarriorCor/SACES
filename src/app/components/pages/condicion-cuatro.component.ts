import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../services/titulo.service';

@Component({
  selector: 'app-condicion-cuatro',
  templateUrl: './condicion-cuatro.component.html',
  styleUrls: ['./condicion-cuatro.component.css']
})
export class CondicionCuatroComponent implements OnInit {

  constructor(private headerTitleService: TituloService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('ORGANIZACIÓN ACTIVIDADES ACADÉMICAS Y PROCESO FORMATIVO');
  }

}
