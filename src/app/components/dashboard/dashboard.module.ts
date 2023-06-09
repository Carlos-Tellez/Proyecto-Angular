import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { NotasComponent } from './notas/notas.component';
import { ClasesComponent } from './clases/clases.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { VerUsuarioComponent } from './usuarios/ver-usuario/ver-usuario.component';
import { VerClaseComponent } from './clases/ver-clase/ver-clase.component';
import { AgregarEditarClaseComponent } from './clases/agregar-editar-clase/agregar-editar-clase.component';


@NgModule({
  declarations: [
    DashboardComponent,
    InicioComponent,
    NavbarComponent,
    UsuariosComponent,
    NotasComponent,
    ClasesComponent,
    CrearUsuarioComponent,
    VerUsuarioComponent,
    VerClaseComponent,
    AgregarEditarClaseComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
