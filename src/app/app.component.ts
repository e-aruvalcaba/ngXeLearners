import { Component, OnInit } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

export interface modulos {
  nombre: string,
  ruta: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'eTrainersSystem';
  // fawesome icon init
  faAngleRight = faAngleRight;
  rutaActual: string = "";
  navegacion:string[]=[];

  modulos: modulos[] = [{
    nombre: "Cursos",
    ruta: "/cursos"
  }, {
    nombre: "Reportes",
    ruta: ""
  }, {
    nombre: "Analiticas",
    ruta: ""
  }, {
    nombre: "Usuarios",
    ruta: "/usuarios"
  }, {
    nombre: "Bug Tracking",
    ruta: "/tracking"
  }];

  /**
   * Constructor
   */
  constructor(private _router: Router) {
  }

  ngOnInit() {
    this._router.events.subscribe(value => {
      this.rutaActual = this._router.url.toString();
        if (value instanceof NavigationEnd) {
           this.actualizarRuta(this._router.url.toString().split("/"));          
      }
    });
  }

  actualizarRuta(newUrl:string[]) {
    console.log(newUrl);
    if(newUrl.length == 2 && newUrl[1]==""){
      newUrl=[];
    }else{
      newUrl.shift();
    }
    this.navegacion = newUrl;
  }

  rutasss(data:string){
    this.actualizarRuta(data.split("/"));
  }
}
