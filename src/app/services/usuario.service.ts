import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listUsuarios: Usuario[] = [
    {usuario: "Sh-Mak", correo: 'Sh-Mak@ColKmgw.com' ,nombre: 'Shinobu Makanochi', sexo: 'Femenino'},
    {usuario: "Ks-Hat", correo: 'Ks-Hat@ColKmgw.com' ,nombre: 'Kakashi Hatake', sexo: 'Masculino'},
    {usuario: "Sk-Uch", correo: 'Sk-Uch@ColKmgw.com' ,nombre: 'Sakura Uchija', sexo: 'Femenino'},
    {usuario: "Nt-Uzm", correo: 'Nt-Uzm@ColKmgw.com' ,nombre: 'Naruto Uzumaki', sexo: 'Masculino'},
    {usuario: "Nm-Kam", correo: 'Nm-Kam@ColKmgw.com' ,nombre: 'Nami Kamado', sexo: 'Femenino'},
    {usuario: "ZR-Ror", correo: 'ZR-Ror@ColKmgw.com' ,nombre: 'Zoro Roronoa', sexo: 'Masculino'},
  
  ];

  constructor() { }

  getUsuario() {
    return this.listUsuarios.slice();
  }

  eliminarUsuario(index: number){
    this.listUsuarios.splice(index,1);
  }

  agregarUsuario(usuario: Usuario) {
    this.listUsuarios.unshift(usuario);
  }

}
