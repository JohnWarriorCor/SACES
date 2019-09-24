import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../services/titulo.service';

@Component({
  selector: 'app-condicion-ocho',
  templateUrl: './condicion-ocho.component.html',
  styleUrls: ['./condicion-ocho.component.css']
})
export class CondicionOchoComponent implements OnInit {

  constructor(private headerTitleService: TituloService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('MEDIOS EDUCATIVOS');
  }

}
