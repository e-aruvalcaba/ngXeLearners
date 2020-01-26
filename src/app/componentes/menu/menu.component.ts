import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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
  ];

  idiomas:object[]=[{
    value: "es",
    text: "language.spanish"
  },{
    value: "en",
    text: "language.english"
  }];

  constructor(private _translate:TranslateService) { }

  ngOnInit() {
  }
  cambiarIdioma(idioma:string){
    console.log(`Nuevo Idioma: ${idioma}`);
    this._translate.use(idioma);
  }

}
