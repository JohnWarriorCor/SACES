import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../services/titulo.service';

@Component({
  selector: 'app-condicion-tres',
  templateUrl: './condicion-tres.component.html',
  styleUrls: ['./condicion-tres.component.css']
})
export class CondicionTresComponent implements OnInit {

  constructor(private headerTitleService: TituloService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('CONTENIDOS CURRICULARES');
  }

}
