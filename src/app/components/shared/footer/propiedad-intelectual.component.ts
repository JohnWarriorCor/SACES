import { Component, OnInit } from '@angular/core';
import { PropiedadIntelectualService } from '../../../services/propiedad-intelectual.service';

@Component({
  selector: 'app-propiedad-intelectual',
  templateUrl: './propiedad-intelectual.component.html',
  styleUrls: ['./propiedad-intelectual.component.css']
})
export class PropiedadIntelectualComponent implements OnInit {

  constructor(public prop: PropiedadIntelectualService ) { }

  ngOnInit() {
  }

}
