import { Component } from '@angular/core';
import { Condicion1Service } from '../../services/condicion1.service';

@Component({
  selector: 'app-registro-con1',
  templateUrl: './registro-con1.component.html',
  styleUrls: ['./registro-con1.component.css']
})
export class RegistroCon1Component {
  condiciones1: any[] = [];
  loading = true;
  constructor( private _CONDICIONES1SERVICE: Condicion1Service ) {
    this._CONDICIONES1SERVICE.getInvocadores().subscribe( data => {
      setTimeout(() => {
        this.loading = false;
        this.condiciones1 = data;
      }, 1000);
    });
  }

  borrarInvocador( key$: string) {
    this._CONDICIONES1SERVICE.borrarInvocador(key$).subscribe( respuesta => {
      if ( respuesta ) {
        console.error(respuesta);
      } else {
        delete this.condiciones1[key$];
      }
    });
  }

}
