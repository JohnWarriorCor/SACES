import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { Condicion6 } from '../interfaces/condicion6';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Condicion6Service {
  condicionRegistroURL = 'https://saces-8f3e0.firebaseio.com/condicion6.json';
  condicionURL = 'https://saces-8f3e0.firebaseio.com/condicion6/';
  constructor(private http: Http) { }
  nuevoCondicion6( condicion6: Condicion6) {
    const body = JSON.stringify(condicion6);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.condicionRegistroURL, body, {headers} ).pipe(map(res => {
      console.log(res.json());
      return res.json();
    }));
  }
  actualizarCondicion6( condicion6: Condicion6, key$: string ) {
    const body = JSON.stringify(condicion6);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.condicionURL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      console.log(res.json());
      return res.json();
    }));

  }
  getCondicion6(key$: string) {
    const url = `${ this.condicionURL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getCondiciones6() {
    return this.http.get( this.condicionRegistroURL ).pipe(map(res => res.json()));
  }
  borrarCondicion6( key$: string) {
    const url = `${ this.condicionURL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}
