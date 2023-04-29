import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PrimeIcons, MenuItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private primengConfig: PrimeNGConfig,
  ) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
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
