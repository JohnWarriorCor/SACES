import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { Condicion4 } from '../interfaces/condicion4';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Condicion4Service {
  condicionRegistroURL = 'https://saces-8f3e0.firebaseio.com/condicion4.json';
  condicionURL = 'https://saces-8f3e0.firebaseio.com/condicion4/';
  constructor(private http: Http) { }
  nuevoCondicion4( condicion4: Condicion4) {
    const body = JSON.stringify(condicion4);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.condicionRegistroURL, body, {headers} ).pipe(map(res => {
      console.log(res.json());
      return res.json();
    }));
  }
  actualizarCondicion4( condicion4: Condicion4, key$: string ) {
    const body = JSON.stringify(condicion4);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.condicionURL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      console.log(res.json());
      return res.json();
    }));

  }
  getCondicion4(key$: string) {
    const url = `${ this.condicionURL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getCondiciones4() {
    return this.http.get( this.condicionRegistroURL ).pipe(map(res => res.json()));
  }
  borrarCondicion4( key$: string) {
    const url = `${ this.condicionURL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}
