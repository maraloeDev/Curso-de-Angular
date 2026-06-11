import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.html',
  //styleUrl: './empleado.css',
  // inline, es que si el estilo es muy pequeño, se puede poner directamente en el componente, pero si es muy grande, es mejor ponerlo en un archivo css separado
  styles:["p{background-color: red;}"]
})
export class Empleado {}
