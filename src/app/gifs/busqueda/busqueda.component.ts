import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor( private gifsService: GifsService ) {}

  buscar() {
    let valor: string = this.txtBuscar.nativeElement.value.trim();
    if(valor === '') {
      return;
    }
    this.gifsService.buscarGifs(valor);
    
    this.txtBuscar.nativeElement.value = ''
  }

}
