import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  funcion_acerca(url: string): void {
    /* console.log("Funciona",url); */
    this.router.navigate([url])
  }

  funcion_motivacion(url: string): void {
    this.router.navigate([url])
  }

  funcion_error404(url: string): void {
    this.router.navigate([url])
  }

  funcion_prueba(url: string): void {
    this.router.navigate([url])
  }

}
