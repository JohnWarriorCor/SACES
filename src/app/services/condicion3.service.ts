import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { Condicion3 } from '../interfaces/condicion3';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Condicion3Service {
  condicionRegistroURL = 'https://saces-8f3e0.firebaseio.com/condicion3.json';
  condicionURL = 'https://saces-8f3e0.firebaseio.com/condicion3/';
  constructor(private http: Http) { }
  nuevoCondicion3( condicion3: Condicion3) {
    const body = JSON.stringify(condicion3);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.condicionRegistroURL, body, {headers} ).pipe(map(res => {
      console.log(res.json());
      return res.json();
    }));
  }
  actualizarCondicion3( condicion3: Condicion3, key$: string ) {
    const body = JSON.stringify(condicion3);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.condicionURL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      console.log(res.json());
      return res.json();
    }));

  }
  getCondicion3(key$: string) {
    const url = `${ this.condicionURL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getCondiciones3() {
    return this.http.get( this.condicionRegistroURL ).pipe(map(res => res.json()));
  }
  borrarCondicion3( key$: string) {
    const url = `${ this.condicionURL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}
