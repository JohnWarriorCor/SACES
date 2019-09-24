import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../services/titulo.service';

@Component({
  selector: 'app-condicion-dos',
  templateUrl: './condicion-dos.component.html',
  styleUrls: ['./condicion-dos.component.css']
})
export class CondicionDosComponent implements OnInit {

  constructor(private headerTitleService: TituloService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('JUSTIFICACIÓN DEL PROGRAMA');
  }

}
