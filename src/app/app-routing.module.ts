import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { AcercaComponent } from './acerca/acerca.component';
import { MotivacionComponent } from './motivacion/motivacion.component';
import { Error404Component } from './error404/error404.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListarLibrosComponent } from './listar-libros/listar-libros.component';

const routes: Routes = [
  {path: 'prueba', component: PruebaComponent},
  {path: 'acerca', component: AcercaComponent},
  {path: 'motivacion', component: MotivacionComponent},
  {path: 'error404', component: Error404Component},
  {path: 'inicio', component: InicioComponent},
  {path: 'listar-libros', component: ListarLibrosComponent},
  /* {path: '', component: AppComponent}, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
