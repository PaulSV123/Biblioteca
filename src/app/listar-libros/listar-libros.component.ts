import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estanteria } from '../common/datos';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-listar-libros',
  templateUrl: './listar-libros.component.html',
  styleUrls: ['./listar-libros.component.scss']
})
export class ListarLibrosComponent implements OnInit {

  displayedColumns: string[] = ['id', 'titulo', 'autor', 'tipo', 'fechaPublicacion'];
  dataSource = new MatTableDataSource<Estanteria>([
    {id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', tipo: 'Novela', fechaPublicacion: 1967},
    {id: 2, titulo: 'El gran Gatsby', autor: 'F. Scott Fitzgerald', tipo: 'Novela', fechaPublicacion: 1925},
    {id: 3, titulo: '1984', autor: 'George Orwell', tipo: 'Novela distópica', fechaPublicacion: 1949},
    {id: 4, titulo: 'Matar a un ruiseñor', autor: 'Harper Lee', tipo: 'Novela', fechaPublicacion: 1960},
    {id: 5, titulo: 'Orgullo y prejuicio', autor: 'Jane Austen', tipo: 'Novela romántica', fechaPublicacion: 1813},
    {id: 6, titulo: 'El guardián entre el centeno', autor: 'J.D. Salinger', tipo: 'Novela', fechaPublicacion: 1951},
    {id: 7, titulo: 'El señor de los anillos', autor: 'J.R.R. Tolkien', tipo: 'Trilogía de fantasía', fechaPublicacion: 1954},
    {id: 8, titulo: 'El hobbit', autor: 'J.R.R. Tolkien', tipo: 'Novela de fantasía', fechaPublicacion: 1937},
    {id: 9, titulo: 'Don Quijote de la Mancha', autor: 'Miguel de Cervantes', tipo: 'Novela', fechaPublicacion: 1605},
    {id: 10, titulo: 'Hamlet', autor: 'William Shakespeare', tipo: 'Tragedia', fechaPublicacion: 1603},
    {id: 11, titulo: 'Moby-Dick', autor: 'Herman Melville', tipo: 'Novela', fechaPublicacion: 1851},
    {id: 12, titulo: 'Crimen y castigo', autor: 'Fiódor Dostoyevski', tipo: 'Novela', fechaPublicacion: 1866},
    {id: 13, titulo: 'El extranjero', autor: 'Albert Camus', tipo: 'Novela', fechaPublicacion: 1942},
    {id: 14, titulo: 'La náusea', autor: 'Jean-Paul Sartre', tipo: 'Novela', fechaPublicacion: 1938},
    {id: 15, titulo: 'El proceso', autor: 'Franz Kafka', tipo: 'Novela', fechaPublicacion: 1925},
    {id: 16, titulo: 'La metamorfosis', autor: 'Franz Kafka', tipo: 'Relato corto', fechaPublicacion: 1915},
    {id: 17, titulo: 'La isla del tesoro', autor: 'Robert Louis Stevenson', tipo: 'Novela de aventuras', fechaPublicacion: 1883},
    {id: 18, titulo: 'Drácula', autor: 'Bram Stoker', tipo: 'Novela de terror', fechaPublicacion: 1897},
  ]);
  clickedRows = new Set<Estanteria>();

  constructor(
    private router: Router,
    ) 
    {
  }

  ngOnInit(): void {
    
  }

}
