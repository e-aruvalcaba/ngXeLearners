import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CursosresumenComponent } from './componentes/cursosresumen/cursosresumen.component';

const routes: Routes = [
   { path: '', component: InicioComponent },  
   { path: 'cursos', component: CursosresumenComponent },  
  // { path: 'proveedores', component: ProveedoresComponent },
   { path: '**', component: InicioComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
