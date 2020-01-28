import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropiedadIntelectualService {

  visiblePropiedad: boolean;
  visibleFooter: boolean;

  constructor() { this.visiblePropiedad = false; this.visibleFooter = false; }

  hidePropiedad() { this.visiblePropiedad = false; }

  showPropiedad() { this.visiblePropiedad = true; }

  togglePropiedad() { this.visiblePropiedad = !this.visiblePropiedad; }

  hideFooter() { this.visibleFooter = false; }

  showFooter() { this.visibleFooter = true; }

  toggleFooter() { this.visibleFooter = !this.visibleFooter; }

  doSomethingElseUseful() { }
}
