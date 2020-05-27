import { Component, OnInit } from '@angular/core';

import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  faCoffee = faHome;

  listMenu: Array<any>;

  constructor(private router: Router) { }

  ngOnInit() {
    this.listMenu = new Array();
    this.listMenu = [
    {nombre: 'Pivotes', ruta: 'pivotes'}];
  }

  irInicio() {
    this.router.navigateByUrl('');
  }

}
