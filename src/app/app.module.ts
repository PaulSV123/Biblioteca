import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { MotivacionComponent } from './motivacion/motivacion.component';
import { Error404Component } from './error404/error404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InicioComponent } from './inicio/inicio.component';
import { ListarLibrosComponent } from './listar-libros/listar-libros.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    HeaderComponent,
    NavbarComponent,
    AcercaComponent,
    MotivacionComponent,
    Error404Component,
    InicioComponent,
    ListarLibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
