import { Component } from '@angular/core';
import { Libros } from './common/datos';
import { getLocaleDateTimeFormat } from '@angular/common';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Biblioteca';
  Estante: Libros;
  aleatorio:Number = Math.floor(Math.random() * 100);
  tiempo:Date = new Date(Date.UTC(2023, 4, 18));

  constructor(){
    this.Estante = {
        id: 1,
        Titulo: 'La ciudad y los perros',
        Autor: 'Mario Vargas Llosa',
        Fecha: '1963',
      }
  }
}
