import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../services/titulo.service';


@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.component.html',
  styleUrls: ['./cronograma.component.css']
})
export class CronogramaComponent implements OnInit {

  constructor(private headerTitleService: TituloService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('cronograma');
  }

}
