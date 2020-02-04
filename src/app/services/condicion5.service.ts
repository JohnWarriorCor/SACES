import { Injectable } from '@angular/core';
import { Http, Headers  } from '@angular/http';
import { Condicion5 } from '../interfaces/condicion5';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Condicion5Service {
  condicionRegistroURL = 'https://saces-8f3e0.firebaseio.com/condicion5.json';
  condicionURL = 'https://saces-8f3e0.firebaseio.com/condicion5/';
  constructor(private http: Http) { }
  nuevoCondicion5( condicion5: Condicion5) {
    const body = JSON.stringify(condicion5);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post( this.condicionRegistroURL, body, {headers} ).pipe(map(res => {
      console.log(res.json());
      return res.json();
    }));
  }
  actualizarCondicion5( condicion5: Condicion5, key$: string ) {
    const body = JSON.stringify(condicion5);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    const url = `${this.condicionURL}/${key$}.json`;

    return this.http.put( url, body, {headers} ).pipe(map( res => {
      console.log(res.json());
      return res.json();
    }));

  }
  getCondicion5(key$: string) {
    const url = `${ this.condicionURL }/${ key$ }.json`;
    return this.http.get( url ).pipe(map(res => res.json()));
  }
  getCondiciones5() {
    return this.http.get( this.condicionRegistroURL ).pipe(map(res => res.json()));
  }
  borrarCondicion5( key$: string) {
    const url = `${ this.condicionURL }/${ key$ }.json`;
    return this.http.delete(url).pipe(map( res => res.json()));
  }
}
