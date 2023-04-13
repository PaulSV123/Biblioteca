import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PruebaComponent } from './prueba/prueba.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AcercaComponent } from './acerca/acerca.component';
import { MotivacionComponent } from './motivacion/motivacion.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponent,
    HeaderComponent,
    NavbarComponent,
    AcercaComponent,
    MotivacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
