import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Clase } from 'src/app/interfaces/clase';
import { MatSnackBar } from '@angular/material/snack-bar';

const ListClases: Clase[] = [
  {ident: 1, Nclase: 'Historia', Canthoras: 2, Dclase: 'L - M - V', profesor: 'Minato'},
  {ident: 2, Nclase: 'Matematicas', Canthoras: 2, Dclase: 'L - M - V', profesor: 'Minato'},
  {ident: 3, Nclase: 'Ciencias', Canthoras: 2, Dclase : 'L - M - V', profesor: 'Minato'},
  {ident: 4, Nclase: 'Filosofia', Canthoras: 2, Dclase: 'L - M - V', profesor: 'Minato'},
  {ident: 5, Nclase: 'Informatica', Canthoras: 2, Dclase: 'L - M - V', profesor: 'Minato'},
  {ident: 6, Nclase: 'Español', Canthoras: 2, Dclase: 'L - M - V', profesor: 'Minato'},
  {ident: 7, Nclase: 'Ingles', Canthoras: 2,Dclase: 'L - M - V', profesor: 'Minato'},
  {ident: 8, Nclase: 'Fisica', Canthoras: 2,Dclase: 'L - M - V', profesor: 'Minato'},
  {ident: 9, Nclase: 'Artes', Canthoras: 2,Dclase: 'L - M - V', profesor: 'Minato'},
  {ident: 10,Nclase: 'Religion', Canthoras: 2,Dclase: 'L - M - V', profesor: 'Minato'},
];

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['ident', 'Nclase', 'Canthoras', 'Dclase','profesor', 'acciones'];
  dataSource = new MatTableDataSource<Clase>(ListClases);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _snackBar: MatSnackBar){}

  ngOnInit(): void {
      
  }
  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarclase(index: number) {
    console.log(index);

    this._snackBar.open('‼️ Se elimino la Clase con exito 🥳👏🏻 ‼️', '', {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
