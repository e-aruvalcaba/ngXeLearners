import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { CursosresumenComponent } from './componentes/cursosresumen/cursosresumen.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
   { path: '', component: InicioComponent },  
   { path: 'cursos', component: CursosresumenComponent },  
   { path: 'usuarios', component: UsuariosComponent },  
  // { path: 'proveedores', component: ProveedoresComponent },
   { path: '**', component: InicioComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
