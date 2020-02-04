import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { Condicion2 } from '../interfaces/condicion2';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Condicion2Service {
  condicionRegistroURL = 'https://saces-8f3e0.firebaseio.com/condicion2.json';
  condicionURL = 'https://saces-8f3e0.firebaseio.com/condicion2/';

  constructor(private http: Http) { }
  nuevoCondicion2( condicion2: Condicion2) {
    const body = JSON.stringify(condicion2);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.condicionRegistroURL, body, {headers} ).pipe(map(res => {
      console.log(res.json());
      return res.json();
    }));
  }
  actualizarCondicion2( condicion2: Condicion2, key$: string ) {
    const body = JSON.stringify(condicion2);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.condicionURL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      console.log(res.json());
      return res.json();
    }));

  }
  getCondicion2(key$: string) {
    const url = `${ this.condicionURL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getCondiciones2() {
    return this.http.get( this.condicionRegistroURL ).pipe(map(res => res.json()));
  }
  borrarCondicion2( key$: string) {
    const url = `${ this.condicionURL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}
