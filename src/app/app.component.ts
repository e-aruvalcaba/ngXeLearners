import { Component } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eLearnersSystem';
  // fawesome icon init
  faAngleRight = faAngleRight;

  modulos:string[]=[
    "Cursos",
    "Reportes",
    "Analiticas",
    "Usuarios",
    "Bug Tracking"
  ];

}
