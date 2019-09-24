import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../services/titulo.service';

@Component({
  selector: 'app-condicion-nueve',
  templateUrl: './condicion-nueve.component.html',
  styleUrls: ['./condicion-nueve.component.css']
})
export class CondicionNueveComponent implements OnInit {

  constructor(private headerTitleService: TituloService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('INFRAESTRUCTURA FÍSICA Y TECNOLÓGICA');
  }

}
