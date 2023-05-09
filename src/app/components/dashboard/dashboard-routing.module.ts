import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NotasComponent } from './notas/notas.component';
import { ClasesComponent } from './clases/clases.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { VerUsuarioComponent } from './usuarios/ver-usuario/ver-usuario.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: '', component: InicioComponent },
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'notas', component: NotasComponent },
    { path: 'clases', component: ClasesComponent },
    { path: 'crear-usuario', component: CrearUsuarioComponent },
    { path: 'ver-usuario', component: VerUsuarioComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
