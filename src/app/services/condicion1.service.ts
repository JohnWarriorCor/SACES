import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { Condicion1 } from '../interfaces/condicion1.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Condicion1Service {

  condicionRegistroURL = 'https://saces-8f3e0.firebaseio.com/condicion1.json';
  condicionURL = 'https://saces-8f3e0.firebaseio.com/condicion1/';

  constructor( private http: Http) { }

  nuevoInvocador( condicion1: Condicion1) {
    const body = JSON.stringify(condicion1);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.condicionRegistroURL, body, {headers} ).pipe(map(res => {
      console.log(res.json());
      return res.json();
    }));
  }
  actualizarInvocador( invocador: Condicion1, key$: string ) {
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
export interface Condicion1 {
  idx?: number;
  tipoprograma: string;
  por1: number;
  nombreprograma: string;
  respnombre: string;
  datenombre: string;
  titulo: string;
  resptitulo: string;
  datetitulo: string;
  respcontenido: string;
  datecontenido: string;
  observa: string;
  pregunta11: string;
  pregunta21: string;
  pregunta31: string;
  pregunta41: string;
}
