import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GestionDatosComponent } from './gestion-datos/gestion-datos.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'gestionDatos',
    component: GestionDatosComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
