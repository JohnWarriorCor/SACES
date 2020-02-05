import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';
import { TituloService } from '../../../services/titulo.service';
import { PropiedadIntelectualService } from '../../../services/propiedad-intelectual.service';
import { formatDate } from '@angular/common';
import { Router, ActivatedRoute} from '@angular/router';

import { FormGroup, NgForm, FormControl, Validators, FormArray } from '@angular/forms';
import { NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public prop: PropiedadIntelectualService, public foot: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService) { }

  ngOnInit() {
    this.headerTitleService.setTitle('INGRESO DE USUARIO');
    this.nav.hide();
    this.prop.hidePropiedad();
    this.foot.showFooter();
  }

}
