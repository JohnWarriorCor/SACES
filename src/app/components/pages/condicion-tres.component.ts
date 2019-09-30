import { Component, OnInit } from '@angular/core';
import { TituloService } from '../../services/titulo.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-condicion-tres',
  templateUrl: './condicion-tres.component.html',
  styleUrls: ['./condicion-tres.component.css']
})
export class CondicionTresComponent implements OnInit {

  constructor(private headerTitleService: TituloService, public nav: NavbarService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('CONTENIDOS CURRICULARES');
    this.nav.show();
  }

}
