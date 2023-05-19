import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Clase } from 'src/app/interfaces/clase';

@Component({
  selector: 'app-agregar-editar-clase',
  templateUrl: './agregar-editar-clase.component.html',
  styleUrls: ['./agregar-editar-clase.component.css']
})
export class AgregarEditarClaseComponent implements OnInit {

  form: FormGroup


  constructor(private fb: FormBuilder, private httpClient: HttpClient){
    this.form = this.fb.group({
      nclase: ['',Validators.required],
      choras: ['',Validators.required],
      dclase: ['',Validators.required],
      profesor: ['',Validators.required],
    })
  }


  ListClase(){
    return this.httpClient.get<Clase[]>('https://6466a8802ea3cae8dc1c0271.mockapi.io/api/clase')
  }

  ngOnInit(): void {
      
  }


  agregarClase() {
    const clase: Clase = {
      Nclase : this.form.value.nclase,
      Canthoras: this.form.value.choras,
      Dclase: this.form.value.dclase,
      profesor:this.form.value.profesor
    }

    console.log(clase);
  }



}
