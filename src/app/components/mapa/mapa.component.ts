import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/Clases/marcador.class';
import { MatSnackBar} from '@angular/material/snack-bar';
import {MatDialog } from '@angular/material';
import { EditarMarcadorComponent } from './editar-marcador.component';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {



  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  marcadores: Marcador[] = [];

  constructor(private snackBar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit() {

    this.cargarStorage();
  }


  addMark(eventoMap: any) {

    console.log(eventoMap);
    const coords: {lat: number, lng: number} = eventoMap.coords;

    const nuevoMarcador = new Marcador(coords.lat, coords.lng);

    this.marcadores.push(nuevoMarcador);

    console.log(nuevoMarcador);
    this.gardarStorage();

    this.showMessage('Marcador agregado correctamente');


  }


  gardarStorage() {

    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }


  cargarStorage() {

  const marcadores = localStorage.getItem('marcadores');
  if (marcadores) {
      this.marcadores = JSON.parse(marcadores);
    }
  }



  borrarMarcador(index) {
     this.marcadores.splice(index, 1);
     this.gardarStorage();
     this.showMessage('Marcador borrado correctamente');
  }

  editarMarcador(marcador: Marcador): void {
    const dialogRef = this.dialog.open(EditarMarcadorComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc: marcador.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (!result) {
          return;
      }

      marcador.titulo = result.titulo;
      marcador.desc   = result.desc;

      console.log(result);
      this.showMessage('Marcador actualizado correctamente');


      this.gardarStorage();
    });
  }


  showMessage(message: string) {
    this.snackBar.open(message, 'Cerrar', {duration: 3000});
  }

}
