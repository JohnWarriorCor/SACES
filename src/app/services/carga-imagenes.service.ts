import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { FileItem } from '../components/models/file-item';



@Injectable()
export class CargaImagenesService {
  saveUrl: any;
  saveName: any;
  private CARPETA_IMAGENES = 'img';
  metadata = {
    contentType: 'image/png'
  };

  constructor( private db: AngularFirestore ) {}


  cargarImagenesFirebase( imagenes: FileItem[] ) {

    const storageRef = firebase.storage().ref();

    for ( const item of imagenes ) {

      item.estaSubiendo = true;
      if ( item.progreso >= 100 ) {
        continue;
      }

      const uploadTask: firebase.storage.UploadTask =
                  storageRef.child(`${ this.CARPETA_IMAGENES }/${ item.nombreArchivo }`)
                            .put( item.archivo, this.metadata );
      // tslint:disable-next-line:only-arrow-functions
      uploadTask.on( firebase.storage.TaskEvent.STATE_CHANGED,
        ( snapshot: firebase.storage.UploadTaskSnapshot ) =>
                    item.progreso = ( snapshot.bytesTransferred / snapshot.totalBytes ) * 100,
        ( error ) => console.error('Error al subir', error ),
        () => {
          // tslint:disable-next-line:only-arrow-functions
          console.log('Imagen cargada correctamente');
          // tslint:disable-next-line:only-arrow-functions
          // tslint:disable-next-line:max-line-length
          // uploadTask.snapshot.ref.getDownloadURL().then(function( downloadURL) { return  downloadURL; } );
          // tslint:disable-next-line:max-line-length
          uploadTask.snapshot.ref.getDownloadURL().then(function( downloadURL ) { console.log(downloadURL); }  );
          console.log('URL=>', item.url);
          item.url = '';
          item.estaSubiendo = false;
          this.guardarImagen({ nombre: item.nombreArchivo, url: item.url });
          // tslint:disable-next-line:only-arrow-functions
        });


}

}
  // console.log('NOMBRE ARCHIVO', this.saveName, 'URL', this.saveUrl);

  public guardarImagen( imagen: { nombre: string, url: string } ) {
    this.db.collection(`/${ this.CARPETA_IMAGENES }`).add( imagen );
  }
}
