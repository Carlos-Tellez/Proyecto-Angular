import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MenuService } from 'src/app/services/menu.service';
import { Menu } from 'src/app/interfaces/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  menu: Menu[] = [];
  
;

  constructor( private _menuServices : MenuService) {}

  ngOnInit(): void {
    this.cargarMenu();
  }

  cargarMenu(){
    this._menuServices.getMenu().subscribe(data =>{
      this.menu = data;
    })
  }

}
