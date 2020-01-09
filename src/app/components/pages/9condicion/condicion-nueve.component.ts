import { Component, ViewEncapsulation, OnInit, Directive } from '@angular/core';
import { TituloService } from '../../../services/titulo.service';
import { NavbarService } from '../../../services/navbar.service';
import { PropiedadIntelectualService } from '../../../services/propiedad-intelectual.service';
import { FileItem } from '../../models/file-item';
import { CargaImagenesService } from '../../../services/carga-imagenes.service';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
export interface Item { nombre: string; url: string; }
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-condicion-nueve',
  templateUrl: './condicion-nueve.component.html',
  styleUrls: ['./condicion-nueve.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class CondicionNueveComponent implements OnInit {
  // BOTON ASPECTOS - PREGUNTAS
  show = false;
  buttonName = 'Aspectos';
  // MODAL
  closeResult: string;
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  estaSobreElemento = false;
  archivos: FileItem[] = [];
  // tslint:disable-next-line:max-line-length
  constructor(private modalService: NgbModal, private afs: AngularFirestore, public cargaImagenes: CargaImagenesService, public prop: PropiedadIntelectualService, private headerTitleService: TituloService, public nav: NavbarService) {
    this.itemsCollection = afs.collection<Item>('img');
    this.items = this.itemsCollection.valueChanges();
  }

  ngOnInit() {
    this.headerTitleService.setTitle('INFRAESTRUCTURA FÍSICA Y TECNOLÓGICA');
    this.nav.show();
    this.prop.hide();
  }
  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  cargarImagenes() {
    this.cargaImagenes.cargarImagenesFirebase( this.archivos );
  }

  limpiarArchivos() {
    this.archivos = [];
  }
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) {
      this.buttonName = 'Preguntas';
    } else {
      this.buttonName = 'Aspectos';
    }
  }
}
