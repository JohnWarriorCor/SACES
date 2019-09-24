import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../services/titulo.service';


@Component({
  selector: 'app-condicion-seis',
  templateUrl: './condicion-seis.component.html',
  styleUrls: ['./condicion-seis.component.css']
})
export class CondicionSeisComponent implements OnInit {

  constructor(private headerTitleService: TituloService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('RELACIÓN CON EL SECTOR EXTERNO');
  }

}
