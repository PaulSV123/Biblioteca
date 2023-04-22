import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PruebaComponent } from './prueba/prueba.component';
import { AcercaComponent } from './acerca/acerca.component';
import { MotivacionComponent } from './motivacion/motivacion.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path: 'prueba', component: PruebaComponent},
  {path: 'acerca', component: AcercaComponent},
  {path: 'motivacion', component: MotivacionComponent},
  {path: 'error404', component: Error404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
