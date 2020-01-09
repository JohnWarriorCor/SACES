import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { map } from 'rxjs/operators';
import { HistoriaInst } from '../interfaces/historia-inst';

@Injectable({
  providedIn: 'root'
})
export class HistoriaInstService {

  condicionRegistroURL = 'https://saces-8f3e0.firebaseio.com/historiaInst.json';
  condicionURL = 'https://saces-8f3e0.firebaseio.com/historiaInst/';

  constructor( private http: Http) { }
  nuevoHistoria( condicion1: HistoriaInst) {
    const body = JSON.stringify(condicion1);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.condicionRegistroURL, body, {headers} ).pipe(map(res => {
      console.log(res.json());
      return res.json();
    }));
  }
  actualizarHistoria( invocador: HistoriaInst, key$: string ) {
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
  getHistoria(key$: string) {
    const url = `${ this.condicionURL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getHistorias() {
    return this.http.get( this.condicionRegistroURL ).pipe(map(res => res.json()));
  }
  borrarHistoria( key$: string) {
    const url = `${ this.condicionURL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}

