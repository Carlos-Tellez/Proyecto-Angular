import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form:FormGroup
  loading  = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router){
    this.form = this.fb.group({
      usuario: ['',Validators.required],
      password: ['',Validators.required]
    })
  }

  ngOnInit(): void {
      
  }

  ingresar() {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario == 'Docente' && password =='admin123') {
      //redirecionamiento al dashboard
      this.fakeLoading();
    } else {
      //retornar un error 
      this.error();
      this.form.reset();
    }
  }

  error() {
    this._snackBar.open('‼️ El Usuario o La Contraseña Son Invalidos ‼️', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

  fakeLoading() {
    this.loading = true
    setTimeout(() => {

    this.router.navigate(['dashboard']);
    }, 1500);
  }

}
