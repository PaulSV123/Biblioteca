import { Component } from '@angular/core';
import { Libros } from './common/datos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Biblioteca';
  Estante: Libros;
  aleatorio:Number = Math.floor(Math.random() * 100);

  constructor(){
    this.Estante = {
        id: 1,
        Titulo: 'Mis Hojas',
        Autor: 'Saul Servantes',
        Fecha: '2017-05-20',
      }
  }
}
