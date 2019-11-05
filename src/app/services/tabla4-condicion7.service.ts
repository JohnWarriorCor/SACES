import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { Tabla2Condicion7 } from '../interfaces/tabla2Condicion7.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Tabla4Condicion7Service {
  condicionRegistroURL = 'https://saces-8f3e0.firebaseio.com/tabla2condicion7.json';
  condicionURL = 'https://saces-8f3e0.firebaseio.com/tabla2condicion7/';

  constructor(private http: Http) { }
  nuevoInvocador( tabla2condicion7: Tabla2Condicion7) {
    const body = JSON.stringify(tabla2condicion7);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.condicionRegistroURL, body, {headers} ).pipe(map(res => {
      console.log(res.json());
      return res.json();
    }));
  }
  actualizarInvocador( invocador: Tabla2Condicion7, key$: string ) {
    const body = JSON.stringify(invocador);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.condicionURL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      console.log(res.json());
      return res.json();
    }));

  }
  getInvocador(key$: string) {
    const url = `${ this.condicionURL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getInvocadores() {
    return this.http.get( this.condicionRegistroURL ).pipe(map(res => res.json()));
  }
  borrarInvocador( key$: string) {
    const url = `${ this.condicionURL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}
export interface Tabla2Condicion7 {
  idx?: number;
  anio: string;
  periodo: string;
  estudiantesIns: string;
  graduados: string;
  egresados: string;
  tasaDesSpa: string;
  tasaDes: string;
}
