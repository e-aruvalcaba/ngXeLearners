import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  // hardcoded
  menuopciones:string[] = [
    "Correo Electronico",
    "Administrar cursos",
    "Analiticas personales",
    "Configuracion de cuenta",
    "Cerrar Sesion en eTrainersCMS"
  ]

  constructor() { }

  ngOnInit() {
  }

}
