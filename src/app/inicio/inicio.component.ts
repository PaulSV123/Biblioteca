import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libros } from '../common/datos';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  [x: string]: any;
  title = 'Biblioteca';
  Libro1: Libros;Libro2: Libros;Libro3: Libros;
  aleatorio:Number = Math.floor(Math.random() * 100);
  tiempo:Date = new Date(Date.UTC(2023, 4, 18));

  constructor(
    private router: Router,
  ){
    
    function redireccionar(url: string): void {
      window.location.href = url;
    }

    this.Libro1 = {
        id: 1,
        Titulo: 'La ciudad y los perros',
        Autor: 'Mario Vargas Llosa',
        Fecha: '1963',
      },
    this.Libro2 = {
      id: 2,
      Titulo: 'Travesuras de la niña mala',
      Autor: 'Mario Vargas Llosa',
      Fecha: '2006',
    },
    this.Libro3 = {
      id: 3,
      Titulo: 'Los cachorros',
      Autor: 'Mario Vargas Llosa',
      Fecha: '1967',
    }
    /* const libro1: Libros = {
      id: 1,
      Titulo: 'La ciudad y los perros',
      Autor: 'Mario Vargas Llosa',
      Fecha: '1963',
    };
    const libro2: Libros = {
      id: 2,
      Titulo: 'La ciudad y los perros',
      Autor: 'Mario Vargas Llosa',
      Fecha: '1963',
    }; */
  }
  funcion_volver(url: string): void {
    console.log("Funciona",url);
    this.router.navigate([url])
  }

  funcion_listar_libros(url: string): void {
    this.router.navigate([url])
  }

  ngOnInit(): void {
  }

}
